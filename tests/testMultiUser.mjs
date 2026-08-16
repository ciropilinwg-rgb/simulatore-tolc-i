import { mkdtemp, rm } from 'node:fs/promises';
import { createServer as createNetServer } from 'node:net';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import questionBank from '../src/data/questionBank.js';
import { selectHighestErrorQuestions, selectLeastPracticedQuestions } from '../src/engine/quizEngine.js';
import { createSimulatoreServer } from '../server/appServer.mjs';

let passed = 0;
let failed = 0;

function check(condition, message) {
  if (condition) {
    passed += 1;
    console.log(`OK  ${message}`);
    return;
  }

  failed += 1;
  console.error(`NO  ${message}`);
}

function getErrorCode(payload) {
  return payload?.error?.code || '';
}

async function findAvailablePort() {
  return new Promise((resolve, reject) => {
    const server = createNetServer();
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      const port = typeof address === 'object' && address ? address.port : 0;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(port);
      });
    });
    server.on('error', reject);
  });
}

function createClient(baseUrl) {
  let cookie = '';

  async function request(urlPath, { method = 'GET', body } = {}) {
    const headers = {};
    if (cookie) {
      headers.Cookie = cookie;
    }
    if (body !== undefined) {
      headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(`${baseUrl}${urlPath}`, {
      method,
      headers,
      body: body === undefined ? undefined : JSON.stringify(body)
    });

    const setCookies = typeof response.headers.getSetCookie === 'function'
      ? response.headers.getSetCookie()
      : [response.headers.get('set-cookie')].filter(Boolean);

    if (setCookies.length > 0) {
      cookie = setCookies.map((value) => value.split(';', 1)[0]).join('; ');
    }

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};
    return { status: response.status, data };
  }

  return { request };
}

function extractToken(actionUrl) {
  return new URL(actionUrl).searchParams.get('token') || '';
}

async function getLatestOutboxMessage(client, { email, category }) {
  const params = new URLSearchParams();
  if (email) {
    params.set('to', email);
  }
  if (category) {
    params.set('category', category);
  }

  const query = params.toString();
  const result = await client.request(`/api/dev/outbox${query ? `?${query}` : ''}`);
  const items = [...(result.data.items || [])].sort((left, right) => (
    new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime()
  ));
  return items[0] || null;
}

const projectRoot = path.resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const tempRoot = await mkdtemp(path.join(tmpdir(), 'simulatore-multiuser-'));
const port = await findAvailablePort();
const baseUrl = `http://127.0.0.1:${port}`;

const app = createSimulatoreServer({
  distDir: path.join(projectRoot, 'dist'),
  dbPath: path.join(tempRoot, 'simulatore.sqlite'),
  outboxDir: path.join(tempRoot, 'outbox'),
  appBaseUrl: baseUrl
});

await new Promise((resolve) => app.server.listen(port, '127.0.0.1', resolve));

const publicClient = createClient(baseUrl);
const userAClient = createClient(baseUrl);
const userBClient = createClient(baseUrl);

const userA = {
  firstName: 'Mario',
  lastName: 'Rossi',
  email: 'mario.rossi@example.com',
  phone: '+39 333 1234567',
  password: 'Password123',
  newPassword: 'Password456'
};

const userB = {
  firstName: 'Giulia',
  lastName: 'Verdi',
  email: 'giulia.verdi@example.com',
  phone: '+39 347 7654321',
  password: 'Password789'
};

const [q1, q2, q3] = questionBank.slice(0, 3);

try {
  console.log('\n=== Autenticazione e validazione ===');

  let result = await publicClient.request('/api/dev/outbox/clear', { method: 'POST' });
  check(result.status === 200, 'L’inbox locale può essere azzerata per il collaudo');

  result = await publicClient.request('/api/stats/overview');
  check(result.status === 401, 'Le statistiche protette non sono accessibili senza login');

  result = await publicClient.request('/api/auth/register', {
    method: 'POST',
    body: {
      firstName: 'Test',
      lastName: 'Email',
      email: 'email-non-valida',
      phone: '+39 333 1234567',
      password: 'Password123',
      confirmPassword: 'Password123'
    }
  });
  check(result.status === 400 && getErrorCode(result.data) === 'VALIDATION_ERROR', 'La registrazione rifiuta email non valide');

  result = await publicClient.request('/api/auth/register', {
    method: 'POST',
    body: {
      firstName: 'Test',
      lastName: 'Phone',
      email: 'phone@example.com',
      phone: '12',
      password: 'Password123',
      confirmPassword: 'Password123'
    }
  });
  check(result.status === 400 && getErrorCode(result.data) === 'VALIDATION_ERROR', 'La registrazione rifiuta numeri di cellulare non validi');

  result = await publicClient.request('/api/auth/register', {
    method: 'POST',
    body: {
      firstName: 'Test',
      lastName: 'Password',
      email: 'weak@example.com',
      phone: '+39 333 1234567',
      password: 'abc',
      confirmPassword: 'abc'
    }
  });
  check(result.status === 400 && getErrorCode(result.data) === 'VALIDATION_ERROR', 'La registrazione rifiuta password troppo deboli');

  result = await publicClient.request('/api/auth/register', {
    method: 'POST',
    body: {
      firstName: 'Test',
      lastName: 'Confirm',
      email: 'confirm@example.com',
      phone: '+39 333 1234567',
      password: 'Password123',
      confirmPassword: 'Password999'
    }
  });
  check(result.status === 400 && getErrorCode(result.data) === 'VALIDATION_ERROR', 'La registrazione rifiuta password e conferma differenti');

  result = await publicClient.request('/api/auth/register', {
    method: 'POST',
    body: {
      firstName: userA.firstName,
      lastName: userA.lastName,
      email: userA.email,
      phone: userA.phone,
      password: userA.password,
      confirmPassword: userA.password
    }
  });
  check(result.status === 201, 'Il primo account viene creato correttamente');

  result = await publicClient.request('/api/auth/login', {
    method: 'POST',
    body: {
      identifier: userA.email,
      password: userA.password
    }
  });
  check(result.status === 403 && getErrorCode(result.data) === 'EMAIL_NOT_VERIFIED', 'Il login è bloccato finché l’email non viene confermata');

  const firstVerificationMessage = await getLatestOutboxMessage(publicClient, {
    email: userA.email,
    category: 'verify_email'
  });
  check(Boolean(firstVerificationMessage?.actionUrl), 'La registrazione genera una email di conferma');

  result = await publicClient.request('/api/auth/resend-verification', {
    method: 'POST',
    body: { email: userA.email }
  });
  check(result.status === 200, 'Il reinvio della mail di conferma è disponibile');

  const secondVerificationMessage = await getLatestOutboxMessage(publicClient, {
    email: userA.email,
    category: 'verify_email'
  });
  check(
    secondVerificationMessage?.id && secondVerificationMessage.id !== firstVerificationMessage.id,
    'Il reinvio produce un nuovo messaggio di verifica'
  );

  result = await publicClient.request('/api/auth/verify-email', {
    method: 'POST',
    body: { token: 'token-non-valido' }
  });
  check(result.status === 400 && getErrorCode(result.data) === 'INVALID_OR_EXPIRED_TOKEN', 'I token di verifica non validi vengono rifiutati');

  result = await publicClient.request('/api/auth/verify-email', {
    method: 'POST',
    body: { token: extractToken(secondVerificationMessage.actionUrl) }
  });
  check(result.status === 200, 'La verifica email attiva correttamente l’account');

  result = await userAClient.request('/api/auth/login', {
    method: 'POST',
    body: {
      identifier: userA.email,
      password: userA.password
    }
  });
  check(result.status === 200, 'L’utente verificato può accedere');

  result = await userAClient.request('/api/auth/me');
  check(result.status === 200 && result.data.authenticated === true, 'La sessione autenticata resta disponibile alle richieste successive');

  result = await publicClient.request('/api/auth/register', {
    method: 'POST',
    body: {
      firstName: userA.firstName,
      lastName: userA.lastName,
      email: userA.email,
      phone: userA.phone,
      password: userA.password,
      confirmPassword: userA.password
    }
  });
  check(result.status === 409 && getErrorCode(result.data) === 'EMAIL_ALREADY_USED', 'Non è possibile registrare due account con la stessa email');

  result = await publicClient.request('/api/auth/register', {
    method: 'POST',
    body: {
      firstName: userB.firstName,
      lastName: userB.lastName,
      email: userB.email,
      phone: userB.phone,
      password: userB.password,
      confirmPassword: userB.password
    }
  });
  check(result.status === 201, 'Il secondo account viene creato correttamente');

  const userBVerificationMessage = await getLatestOutboxMessage(publicClient, {
    email: userB.email,
    category: 'verify_email'
  });
  result = await publicClient.request('/api/auth/verify-email', {
    method: 'POST',
    body: { token: extractToken(userBVerificationMessage.actionUrl) }
  });
  check(result.status === 200, 'Anche il secondo account può essere verificato');

  result = await userBClient.request('/api/auth/login', {
    method: 'POST',
    body: {
      identifier: userB.email,
      password: userB.password
    }
  });
  check(result.status === 200, 'Il secondo account può accedere in modo indipendente');

  console.log('\n=== Isolamento dati e integrità backend ===');

  result = await userAClient.request('/api/quiz/sessions', {
    method: 'POST',
    body: {
      sessionKey: 'user-a-session-1',
      selectionMode: 'RANDOM',
      selectedSubjects: [...new Set([q1.materia, q2.materia])],
      questionIds: [String(q1.id), String(q2.id)],
      requestedCount: 2
    }
  });
  check(result.status === 201, 'L’utente A può creare una sessione quiz personale');

  result = await userAClient.request(`/api/quiz/sessions/user-a-session-1/questions/${encodeURIComponent(String(q1.id))}/shown`, {
    method: 'POST'
  });
  check(result.status === 200 && result.data.recorded === true, 'La prima visualizzazione di una domanda viene registrata');

  result = await userAClient.request(`/api/quiz/sessions/user-a-session-1/questions/${encodeURIComponent(String(q1.id))}/shown`, {
    method: 'POST'
  });
  check(result.status === 200 && result.data.recorded === false, 'La doppia visualizzazione della stessa domanda non duplica i conteggi');

  result = await userAClient.request(`/api/quiz/sessions/user-a-session-1/questions/${encodeURIComponent(String(q1.id))}/answer`, {
    method: 'POST',
    body: { selectedText: q1.risposteErrate[0] }
  });
  check(result.status === 200 && result.data.recorded === true && result.data.isCorrect === false, 'Le risposte errate vengono registrate per il profilo corretto');

  result = await userAClient.request(`/api/quiz/sessions/user-a-session-1/questions/${encodeURIComponent(String(q1.id))}/answer`, {
    method: 'POST',
    body: { selectedText: q1.risposteErrate[0] }
  });
  check(result.status === 200 && result.data.recorded === false, 'La doppia registrazione della stessa risposta è idempotente');

  result = await userAClient.request(`/api/quiz/sessions/user-a-session-1/questions/${encodeURIComponent(String(q2.id))}/shown`, {
    method: 'POST'
  });
  check(result.status === 200 && result.data.recorded === true, 'La seconda domanda della sessione viene registrata regolarmente');

  result = await userAClient.request(`/api/quiz/sessions/user-a-session-1/questions/${encodeURIComponent(String(q2.id))}/answer`, {
    method: 'POST',
    body: { selectedText: q2.rispostaCorretta }
  });
  check(result.status === 200 && result.data.isCorrect === true, 'Le risposte corrette vengono registrate regolarmente');

  result = await userAClient.request(`/api/quiz/sessions/user-a-session-1/questions/${encodeURIComponent(String(q3.id))}/answer`, {
    method: 'POST',
    body: { selectedText: q3.rispostaCorretta }
  });
  check(result.status === 400 && getErrorCode(result.data) === 'QUESTION_NOT_IN_SESSION', 'Il backend rifiuta risposte su domande non presenti nella sessione');

  result = await userAClient.request('/api/quiz/sessions/user-a-session-1/finish', { method: 'POST' });
  check(result.status === 200, 'La sessione dell’utente A può essere chiusa e riepilogata');

  await userAClient.request('/api/quiz/sessions', {
    method: 'POST',
    body: {
      sessionKey: 'user-a-session-2',
      selectionMode: 'HIGHEST_ERROR_RATE',
      selectedSubjects: [q1.materia],
      questionIds: [String(q1.id)],
      requestedCount: 1
    }
  });
  await userAClient.request(`/api/quiz/sessions/user-a-session-2/questions/${encodeURIComponent(String(q1.id))}/shown`, {
    method: 'POST'
  });
  await userAClient.request(`/api/quiz/sessions/user-a-session-2/questions/${encodeURIComponent(String(q1.id))}/answer`, {
    method: 'POST',
    body: { selectedText: q1.risposteErrate[1] }
  });
  await userAClient.request('/api/quiz/sessions/user-a-session-2/finish', { method: 'POST' });

  await userBClient.request('/api/quiz/sessions', {
    method: 'POST',
    body: {
      sessionKey: 'user-b-session-1',
      selectionMode: 'RANDOM',
      selectedSubjects: [...new Set([q1.materia, q3.materia])],
      questionIds: [String(q1.id), String(q3.id)],
      requestedCount: 2
    }
  });
  await userBClient.request(`/api/quiz/sessions/user-b-session-1/questions/${encodeURIComponent(String(q1.id))}/shown`, {
    method: 'POST'
  });
  await userBClient.request(`/api/quiz/sessions/user-b-session-1/questions/${encodeURIComponent(String(q1.id))}/answer`, {
    method: 'POST',
    body: { selectedText: q1.rispostaCorretta }
  });
  await userBClient.request(`/api/quiz/sessions/user-b-session-1/questions/${encodeURIComponent(String(q3.id))}/shown`, {
    method: 'POST'
  });
  await userBClient.request(`/api/quiz/sessions/user-b-session-1/questions/${encodeURIComponent(String(q3.id))}/answer`, {
    method: 'POST',
    body: { selectedText: q3.risposteErrate[0] }
  });
  await userBClient.request('/api/quiz/sessions/user-b-session-1/finish', { method: 'POST' });

  const statsAResponse = await userAClient.request('/api/stats/question-map');
  const statsBResponse = await userBClient.request('/api/stats/question-map');
  const statsA = statsAResponse.data.stats || {};
  const statsB = statsBResponse.data.stats || {};

  check(statsAResponse.status === 200 && statsBResponse.status === 200, 'Ogni utente può leggere solo le proprie statistiche via API protetta');
  check(statsA[String(q1.id)].numeroRisposteErrate === 2, 'L’utente A accumula i propri errori sulla domanda 1');
  check(statsB[String(q1.id)].numeroRisposteErrate === 0 && statsB[String(q1.id)].numeroRisposteCorrette === 1, 'L’utente B mantiene conteggi indipendenti sulla stessa domanda');
  check(!statsA[String(q3.id)] && statsB[String(q3.id)].numeroRisposteErrate === 1, 'Le domande svolte da B non compaiono automaticamente nello storico di A');

  const highestForA = selectHighestErrorQuestions([q1, q2, q3], 1, statsA);
  const highestForB = selectHighestErrorQuestions([q1, q2, q3], 1, statsB);
  check(highestForA[0].id === q1.id, 'La modalità maggiori errori per A usa solo lo storico di A');
  check(highestForB[0].id === q3.id, 'La modalità maggiori errori per B usa solo lo storico di B');

  const leastForA = selectLeastPracticedQuestions([q1, q2, q3], 1, statsA);
  const leastForB = selectLeastPracticedQuestions([q1, q2, q3], 1, statsB);
  check(leastForA[0].id === q3.id, 'La modalità meno svolte per A individua la sua domanda mai affrontata');
  check(leastForB[0].id === q2.id, 'La modalità meno svolte per B individua una domanda diversa da quella di A');

  result = await userAClient.request('/api/stats/history?limit=10');
  const historyA = result.data.items || [];
  check(result.status === 200 && historyA.length === 2, 'Lo storico di A contiene solo le sue due sessioni');

  result = await userBClient.request('/api/stats/history?limit=10');
  const historyB = result.data.items || [];
  check(result.status === 200 && historyB.length === 1, 'Lo storico di B contiene solo la propria sessione');

  result = await userAClient.request('/api/quiz/sessions/user-b-session-1/finish', { method: 'POST' });
  check(result.status === 404 && getErrorCode(result.data) === 'SESSION_NOT_FOUND', 'Un utente non può chiudere né modificare una sessione appartenente a un altro account');

  console.log('\n=== Recupero password, logout e persistenza sessione ===');

  result = await publicClient.request('/api/auth/forgot-password', {
    method: 'POST',
    body: { email: userA.email }
  });
  check(result.status === 200, 'Il recupero password è disponibile per gli account verificati');

  const passwordResetMessage = await getLatestOutboxMessage(publicClient, {
    email: userA.email,
    category: 'reset_password'
  });
  check(Boolean(passwordResetMessage?.actionUrl), 'Il recupero password genera una email con link sicuro');

  result = await publicClient.request('/api/auth/reset-password', {
    method: 'POST',
    body: {
      token: 'reset-non-valido',
      password: userA.newPassword,
      confirmPassword: userA.newPassword
    }
  });
  check(result.status === 400 && getErrorCode(result.data) === 'INVALID_OR_EXPIRED_TOKEN', 'I token di reset non validi vengono rifiutati');

  result = await publicClient.request('/api/auth/reset-password', {
    method: 'POST',
    body: {
      token: extractToken(passwordResetMessage.actionUrl),
      password: userA.newPassword,
      confirmPassword: userA.newPassword
    }
  });
  check(result.status === 200, 'La password può essere aggiornata con un token valido');

  result = await userAClient.request('/api/stats/overview');
  check(result.status === 401, 'Il reset password invalida le sessioni esistenti');

  result = await publicClient.request('/api/auth/login', {
    method: 'POST',
    body: {
      identifier: userA.email,
      password: userA.password
    }
  });
  check(result.status === 401 && getErrorCode(result.data) === 'INVALID_CREDENTIALS', 'La vecchia password non è più utilizzabile');

  result = await userAClient.request('/api/auth/login', {
    method: 'POST',
    body: {
      identifier: userA.email,
      password: userA.newPassword
    }
  });
  check(result.status === 200, 'L’utente può accedere con la nuova password');

  result = await userAClient.request('/api/auth/logout', { method: 'POST' });
  check(result.status === 200, 'Il logout termina correttamente la sessione');

  result = await userAClient.request('/api/stats/overview');
  check(result.status === 401, 'Dopo il logout le aree riservate non sono più accessibili');
} finally {
  await app.close();
  await rm(tempRoot, { recursive: true, force: true });
}

console.log(`\nRisultato: ${passed} test passati, ${failed} falliti.`);

if (failed > 0) {
  process.exit(1);
}
