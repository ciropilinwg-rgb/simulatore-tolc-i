import { createServer } from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import {
  clearCookie,
  getClientIp,
  getRequestUrl,
  HttpError,
  parseCookies,
  readJsonBody,
  sendError,
  sendJson,
  setCookie
} from './httpUtils.mjs';
import {
  addMinutes,
  generateOpaqueToken,
  hashOpaqueToken,
  hashPassword,
  maskEmail,
  normalizeEmail,
  normalizePhone,
  validateEmailFormat,
  validatePasswordStrength,
  validatePhoneFormat,
  verifyPassword
} from './security.mjs';
import { createMailer } from './mailer.mjs';
import { createStore } from './store.mjs';
import { isValidAnswerText, isValidQuestionId } from './questionCatalog.mjs';

const MIME_TYPES = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8'
};

const AUTH_COOKIE = 'simulatore_session';
const SESSION_TTL_MINUTES = 60 * 24 * 7;
const VERIFICATION_TTL_MINUTES = 60 * 24;
const RESET_TTL_MINUTES = 60;

function routeMatches(pattern, pathname) {
  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) {
    return null;
  }

  const params = {};
  for (let index = 0; index < patternParts.length; index += 1) {
    const currentPattern = patternParts[index];
    const currentValue = pathParts[index];

    if (currentPattern.startsWith(':')) {
      params[currentPattern.slice(1)] = currentValue;
      continue;
    }

    if (currentPattern !== currentValue) {
      return null;
    }
  }

  return params;
}

async function serveFile(filePath, response, injectReloadSnippet = '') {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extension] || 'application/octet-stream';
  const raw = await fs.readFile(filePath);
  const body = extension === '.html' && injectReloadSnippet
    ? Buffer.from(raw.toString('utf8').replace('</body>', `${injectReloadSnippet}</body>`))
    : raw;

  response.writeHead(200, {
    'Content-Type': contentType,
    'Cache-Control': 'no-store'
  });
  response.end(body);
}

function buildWaitingHtml() {
  return `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="ing. Ciro Pili" />
    <title>TOLC-I, il simulatore</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #0f172a;
        color: #e2e8f0;
        font-family: system-ui, sans-serif;
      }
      .card {
        width: min(92vw, 36rem);
        padding: 2rem;
        border-radius: 1rem;
        background: rgba(15, 23, 42, 0.82);
        border: 1px solid rgba(148, 163, 184, 0.25);
      }
      h1 {
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Build in preparazione</h1>
      <p>Sto compilando l'applicazione. Ricarica tra qualche secondo.</p>
    </div>
  </body>
</html>`;
}

export function createSimulatoreServer({
  distDir,
  dbPath,
  outboxDir,
  appBaseUrl,
  enableReloadEvents = false
}) {
  const store = createStore({ dbPath });
  const mailer = createMailer({ outboxDir, appBaseUrl });
  const mailDeliveryMode = mailer.deliveryMode || 'local_outbox';
  const isSecureCookie = (() => {
    try {
      return new URL(appBaseUrl).protocol === 'https:';
    } catch {
      return false;
    }
  })();
  const eventClients = new Set();
  const reloadSnippet = enableReloadEvents
    ? `
      <script>
        const events = new EventSource('/__dev_events');
        events.onmessage = (event) => {
          if (event.data === 'reload') {
            window.location.reload();
          }
        };
      </script>
    `
    : '';

  async function getCurrentSession(request) {
    const cookies = parseCookies(request);
    const rawSessionToken = cookies[AUTH_COOKIE];
    if (!rawSessionToken) {
      return null;
    }

    return store.getSessionUser(hashOpaqueToken(rawSessionToken));
  }

  async function requireSession(request) {
    const session = await getCurrentSession(request);
    if (!session) {
      throw new HttpError(401, 'UNAUTHENTICATED', 'Devi accedere per continuare.');
    }
    if (!session.user.emailVerified) {
      throw new HttpError(403, 'EMAIL_NOT_VERIFIED', 'Devi confermare il tuo indirizzo email prima di continuare.');
    }
    return session;
  }

  async function resolveStaticPath(requestPath) {
    const cleanPath = decodeURIComponent((requestPath || '/').split('?')[0]);
    const requestedPath = cleanPath === '/' ? '/index.html' : cleanPath;
    const candidate = path.normalize(path.join(distDir, requestedPath));

    if (!candidate.startsWith(distDir)) {
      return null;
    }

    try {
      const stats = await fs.stat(candidate);
      if (stats.isFile()) {
        return candidate;
      }
    } catch {
      return path.join(distDir, 'index.html');
    }

    return path.join(distDir, 'index.html');
  }

  const routes = [
    {
      method: 'GET',
      pattern: '/api/health',
      handler: async (request, response) => {
        const session = await getCurrentSession(request);
        sendJson(response, 200, {
          ok: true,
          mailDeliveryMode,
          authenticated: Boolean(session),
          user: session?.user || null
        });
      }
    },
    {
      method: 'GET',
      pattern: '/api/dev/outbox',
      handler: async (request, response) => {
        if (mailDeliveryMode !== 'local_outbox') {
          throw new HttpError(404, 'NOT_FOUND', 'Inbox locale non disponibile in questa configurazione.');
        }

        const url = getRequestUrl(request);
        const messages = await mailer.listMessages();
        const filtered = messages.filter((message) => {
          const to = url.searchParams.get('to');
          const category = url.searchParams.get('category');
          if (to && normalizeEmail(message.to) !== normalizeEmail(to)) {
            return false;
          }
          if (category && message.category !== category) {
            return false;
          }
          return true;
        });

        sendJson(response, 200, {
          ok: true,
          items: filtered
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/dev/outbox/clear',
      handler: async (request, response) => {
        if (mailDeliveryMode !== 'local_outbox') {
          throw new HttpError(404, 'NOT_FOUND', 'Inbox locale non disponibile in questa configurazione.');
        }

        await mailer.clearMessages();
        sendJson(response, 200, { ok: true });
      }
    },
    {
      method: 'GET',
      pattern: '/api/auth/me',
      handler: async (request, response) => {
        const session = await getCurrentSession(request);
        sendJson(response, 200, {
          ok: true,
          authenticated: Boolean(session),
          user: session?.user || null
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/auth/register',
      handler: async (request, response) => {
        const body = await readJsonBody(request);
        const firstName = String(body.firstName || '').trim();
        const lastName = String(body.lastName || '').trim();
        const email = String(body.email || '').trim();
        const phone = normalizePhone(body.phone || '');
        const password = String(body.password || '');
        const confirmPassword = String(body.confirmPassword || '');

        if (!firstName) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'Il nome è obbligatorio.', { field: 'firstName' });
        }
        if (!lastName) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'Il cognome è obbligatorio.', { field: 'lastName' });
        }
        if (!validateEmailFormat(email)) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'L’indirizzo email inserito non è valido.', { field: 'email' });
        }
        if (!validatePhoneFormat(phone)) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'Il numero di cellulare inserito non è valido.', { field: 'phone' });
        }

        const passwordCheck = validatePasswordStrength(password);
        if (!passwordCheck.valid) {
          throw new HttpError(400, 'VALIDATION_ERROR', passwordCheck.message, { field: 'password' });
        }
        if (password !== confirmPassword) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'Le password inserite non coincidono.', { field: 'confirmPassword' });
        }

        const emailNormalized = normalizeEmail(email);
        if (store.getUserRowByEmail(emailNormalized)) {
          throw new HttpError(409, 'EMAIL_ALREADY_USED', 'Esiste già un account associato a questo indirizzo email.', { field: 'email' });
        }

        const user = store.createUser({
          firstName,
          lastName,
          email,
          emailNormalized,
          phone,
          passwordHash: hashPassword(password)
        });

        const rawToken = generateOpaqueToken();
        store.replaceAuthToken({
          userId: user.id,
          purpose: 'verify_email',
          tokenHash: hashOpaqueToken(rawToken),
          expiresAt: addMinutes(new Date().toISOString(), VERIFICATION_TTL_MINUTES)
        });

        await mailer.sendVerificationEmail({
          email: user.email,
          firstName: user.firstName,
          token: rawToken
        });

        sendJson(response, 201, {
          ok: true,
          emailMasked: maskEmail(user.email),
          mailDeliveryMode
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/auth/login',
      handler: async (request, response) => {
        const body = await readJsonBody(request);
        const identifier = normalizeEmail(body.identifier || body.email || '');
        const password = String(body.password || '');

        if (!identifier || !password) {
          throw new HttpError(401, 'INVALID_CREDENTIALS', 'Le credenziali inserite non sono corrette.');
        }

        const userRow = store.getUserRowByEmail(identifier);
        if (!userRow || !verifyPassword(password, userRow.password_hash)) {
          throw new HttpError(401, 'INVALID_CREDENTIALS', 'Le credenziali inserite non sono corrette.');
        }

        if (!userRow.email_verified_at) {
          throw new HttpError(403, 'EMAIL_NOT_VERIFIED', 'Devi confermare il tuo indirizzo email prima di accedere.', {
            emailMasked: maskEmail(userRow.email)
          });
        }

        const rawSessionToken = generateOpaqueToken();
        store.createSession({
          userId: userRow.id,
          sessionHash: hashOpaqueToken(rawSessionToken),
          expiresAt: addMinutes(new Date().toISOString(), SESSION_TTL_MINUTES),
          ipAddress: getClientIp(request),
          userAgent: String(request.headers['user-agent'] || '')
        });
        store.touchUserLogin(userRow.id);

        setCookie(response, AUTH_COOKIE, rawSessionToken, {
          httpOnly: true,
          sameSite: 'Lax',
          path: '/',
          maxAge: SESSION_TTL_MINUTES * 60,
          secure: isSecureCookie
        });

        sendJson(response, 200, {
          ok: true,
          user: {
            id: userRow.id,
            firstName: userRow.first_name,
            lastName: userRow.last_name,
            email: userRow.email,
            phone: userRow.phone,
            emailVerified: true,
            emailVerifiedAt: userRow.email_verified_at
          }
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/auth/logout',
      handler: async (request, response) => {
        const cookies = parseCookies(request);
        if (cookies[AUTH_COOKIE]) {
          store.revokeSession(hashOpaqueToken(cookies[AUTH_COOKIE]));
        }
        clearCookie(response, AUTH_COOKIE, {
          path: '/',
          secure: isSecureCookie
        });
        sendJson(response, 200, { ok: true });
      }
    },
    {
      method: 'POST',
      pattern: '/api/auth/resend-verification',
      handler: async (request, response) => {
        const body = await readJsonBody(request);
        const providedEmail = normalizeEmail(body.email || '');
        const currentSession = await getCurrentSession(request);

        let userRow = null;
        if (providedEmail) {
          userRow = store.getUserRowByEmail(providedEmail);
        } else if (currentSession && !currentSession.user.emailVerified) {
          userRow = store.getUserRowById(currentSession.user.id);
        }

        if (userRow && !userRow.email_verified_at) {
          const rawToken = generateOpaqueToken();
          store.replaceAuthToken({
            userId: userRow.id,
            purpose: 'verify_email',
            tokenHash: hashOpaqueToken(rawToken),
            expiresAt: addMinutes(new Date().toISOString(), VERIFICATION_TTL_MINUTES)
          });

          await mailer.sendVerificationEmail({
            email: userRow.email,
            firstName: userRow.first_name,
            token: rawToken
          });
        }

        sendJson(response, 200, {
          ok: true,
          message: 'Se l’account esiste e non è ancora verificato, è stata inviata una nuova email di conferma.',
          mailDeliveryMode
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/auth/verify-email',
      handler: async (request, response) => {
        const body = await readJsonBody(request);
        const token = String(body.token || '').trim();
        if (!token) {
          throw new HttpError(400, 'TOKEN_REQUIRED', 'Il link di conferma non è valido.');
        }

        const tokenRow = store.consumeAuthToken({
          purpose: 'verify_email',
          tokenHash: hashOpaqueToken(token)
        });

        if (!tokenRow) {
          throw new HttpError(400, 'INVALID_OR_EXPIRED_TOKEN', 'Il link di conferma non è valido o è scaduto.');
        }

        const user = store.markUserVerified(tokenRow.user_id);
        sendJson(response, 200, {
          ok: true,
          user
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/auth/forgot-password',
      handler: async (request, response) => {
        const body = await readJsonBody(request);
        const emailNormalized = normalizeEmail(body.email || '');
        const userRow = emailNormalized ? store.getUserRowByEmail(emailNormalized) : null;

        if (userRow && userRow.email_verified_at) {
          const rawToken = generateOpaqueToken();
          store.replaceAuthToken({
            userId: userRow.id,
            purpose: 'reset_password',
            tokenHash: hashOpaqueToken(rawToken),
            expiresAt: addMinutes(new Date().toISOString(), RESET_TTL_MINUTES)
          });

          await mailer.sendPasswordResetEmail({
            email: userRow.email,
            firstName: userRow.first_name,
            token: rawToken
          });
        }

        sendJson(response, 200, {
          ok: true,
          message: 'Se l’account esiste, riceverai una email con le istruzioni per reimpostare la password.',
          mailDeliveryMode
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/auth/reset-password',
      handler: async (request, response) => {
        const body = await readJsonBody(request);
        const token = String(body.token || '').trim();
        const password = String(body.password || '');
        const confirmPassword = String(body.confirmPassword || '');

        if (!token) {
          throw new HttpError(400, 'TOKEN_REQUIRED', 'Il link di recupero non è valido.');
        }

        const passwordCheck = validatePasswordStrength(password);
        if (!passwordCheck.valid) {
          throw new HttpError(400, 'VALIDATION_ERROR', passwordCheck.message, { field: 'password' });
        }
        if (password !== confirmPassword) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'Le password inserite non coincidono.', { field: 'confirmPassword' });
        }

        const tokenRow = store.consumeAuthToken({
          purpose: 'reset_password',
          tokenHash: hashOpaqueToken(token)
        });

        if (!tokenRow) {
          throw new HttpError(400, 'INVALID_OR_EXPIRED_TOKEN', 'Il link di recupero non è valido o è scaduto.');
        }

        const userRow = store.getUserRowById(tokenRow.user_id);
        if (!userRow) {
          throw new HttpError(404, 'ACCOUNT_NOT_FOUND', 'L’account associato non è disponibile.');
        }

        store.updateUserPassword(userRow.id, hashPassword(password));
        store.revokeSessionsForUser(userRow.id);
        sendJson(response, 200, {
          ok: true,
          message: 'La password è stata aggiornata correttamente.'
        });
      }
    },
    {
      method: 'GET',
      pattern: '/api/stats/question-map',
      handler: async (request, response) => {
        const session = await requireSession(request);
        sendJson(response, 200, {
          ok: true,
          stats: store.getQuestionStatsMap(session.user.id)
        });
      }
    },
    {
      method: 'GET',
      pattern: '/api/stats/overview',
      handler: async (request, response) => {
        const session = await requireSession(request);
        sendJson(response, 200, {
          ok: true,
          overview: store.getStatsOverview(session.user.id)
        });
      }
    },
    {
      method: 'GET',
      pattern: '/api/stats/history',
      handler: async (request, response) => {
        const session = await requireSession(request);
        const url = getRequestUrl(request);
        const parsedLimit = Number.parseInt(url.searchParams.get('limit') || '20', 10);
        const limit = Math.min(Math.max(Number.isNaN(parsedLimit) ? 20 : parsedLimit, 1), 100);

        sendJson(response, 200, {
          ok: true,
          items: store.getQuizHistory(session.user.id, limit)
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/quiz/sessions',
      handler: async (request, response) => {
        const session = await requireSession(request);
        const body = await readJsonBody(request);
        const sessionKey = String(body.sessionKey || '').trim();
        const selectionMode = String(body.selectionMode || '').trim();
        const requestedCount = Number.parseInt(body.requestedCount, 10);
        const selectedSubjects = Array.isArray(body.selectedSubjects)
          ? body.selectedSubjects.map((value) => String(value))
          : [];
        const questionIds = Array.isArray(body.questionIds)
          ? body.questionIds.map((value) => String(value))
          : [];

        if (!sessionKey) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'Identificativo sessione mancante.');
        }
        if (!selectionMode) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'Modalità di selezione mancante.');
        }
        if (!Number.isInteger(requestedCount) || requestedCount <= 0) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'Numero di domande non valido.');
        }
        if (questionIds.length === 0 || questionIds.some((questionId) => !isValidQuestionId(questionId))) {
          throw new HttpError(400, 'VALIDATION_ERROR', 'La sessione contiene una o più domande non valide.');
        }

        store.createQuizSession({
          userId: session.user.id,
          sessionKey,
          selectionMode,
          requestedCount,
          selectedSubjects,
          questionIds
        });

        sendJson(response, 201, {
          ok: true,
          sessionKey
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/quiz/sessions/:sessionKey/questions/:questionId/shown',
      handler: async (request, response, params) => {
        const session = await requireSession(request);
        if (!isValidQuestionId(params.questionId)) {
          throw new HttpError(400, 'QUESTION_NOT_FOUND', 'La domanda indicata non esiste.');
        }

        const result = store.recordQuestionShown({
          userId: session.user.id,
          sessionKey: params.sessionKey,
          questionId: params.questionId
        });

        sendJson(response, 200, {
          ok: true,
          recorded: result.recorded
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/quiz/sessions/:sessionKey/questions/:questionId/answer',
      handler: async (request, response, params) => {
        const session = await requireSession(request);
        const body = await readJsonBody(request);
        const selectedText = String(body.selectedText || '').trim();

        if (!isValidQuestionId(params.questionId)) {
          throw new HttpError(400, 'QUESTION_NOT_FOUND', 'La domanda indicata non esiste.');
        }
        if (!selectedText || !isValidAnswerText(params.questionId, selectedText)) {
          throw new HttpError(400, 'INVALID_ANSWER', 'La risposta inviata non è valida per questa domanda.');
        }

        const result = store.recordAnswer({
          userId: session.user.id,
          sessionKey: params.sessionKey,
          questionId: params.questionId,
          selectedText
        });

        sendJson(response, 200, {
          ok: true,
          recorded: result.recorded,
          isCorrect: result.isCorrect
        });
      }
    },
    {
      method: 'POST',
      pattern: '/api/quiz/sessions/:sessionKey/finish',
      handler: async (request, response, params) => {
        const session = await requireSession(request);
        const summary = store.finishQuizSession({
          userId: session.user.id,
          sessionKey: params.sessionKey
        });

        sendJson(response, 200, {
          ok: true,
          summary
        });
      }
    }
  ];

  const server = createServer(async (request, response) => {
    try {
      if (enableReloadEvents && request.url === '/__dev_events') {
        response.writeHead(200, {
          'Cache-Control': 'no-cache, no-transform',
          Connection: 'keep-alive',
          'Content-Type': 'text/event-stream'
        });
        response.write('\n');
        eventClients.add(response);
        request.on('close', () => eventClients.delete(response));
        return;
      }

      const url = getRequestUrl(request);
      for (const route of routes) {
        if (request.method !== route.method) {
          continue;
        }

        const params = routeMatches(route.pattern, url.pathname);
        if (!params) {
          continue;
        }

        await route.handler(request, response, params);
        return;
      }

      if (url.pathname.startsWith('/api/')) {
        throw new HttpError(404, 'NOT_FOUND', 'Endpoint non trovato.');
      }

      const filePath = await resolveStaticPath(request.url || '/');
      if (!filePath) {
        throw new HttpError(403, 'FORBIDDEN', 'Accesso negato.');
      }

      try {
        await fs.access(filePath);
      } catch {
        response.writeHead(503, {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store'
        });
        response.end(buildWaitingHtml());
        return;
      }

      await serveFile(filePath, response, reloadSnippet);
    } catch (error) {
      sendError(response, error);
    }
  });

  return {
    server,
    store,
    mailer,
    broadcastReload() {
      for (const client of eventClients) {
        client.write('data: reload\n\n');
      }
    },
    async close() {
      for (const client of eventClients) {
        client.end();
      }
      await new Promise((resolve) => server.close(resolve));
      store.close();
    }
  };
}
