export class HttpError extends Error {
  constructor(status, code, message, details = null) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function sendJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  response.end(JSON.stringify(payload));
}

export function sendError(response, error) {
  if (error instanceof HttpError) {
    return sendJson(response, error.status, {
      ok: false,
      error: {
        code: error.code,
        message: error.message,
        details: error.details
      }
    });
  }

  console.error('[server] Errore non gestito:', error);
  return sendJson(response, 500, {
    ok: false,
    error: {
      code: 'INTERNAL_ERROR',
      message: 'Si è verificato un errore interno.'
    }
  });
}

export async function readJsonBody(request, maxBytes = 1_000_000) {
  const chunks = [];
  let size = 0;

  for await (const chunk of request) {
    size += chunk.length;
    if (size > maxBytes) {
      throw new HttpError(413, 'PAYLOAD_TOO_LARGE', 'La richiesta è troppo grande.');
    }
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new HttpError(400, 'INVALID_JSON', 'Il corpo della richiesta non è valido.');
  }
}

export function parseCookies(request) {
  const cookieHeader = request.headers.cookie;
  if (!cookieHeader) {
    return {};
  }

  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const separatorIndex = part.indexOf('=');
        if (separatorIndex === -1) {
          return [part, ''];
        }
        const key = part.slice(0, separatorIndex);
        const value = part.slice(separatorIndex + 1);
        return [key, decodeURIComponent(value)];
      })
  );
}

export function appendCookie(response, cookieValue) {
  const previous = response.getHeader('Set-Cookie');
  if (!previous) {
    response.setHeader('Set-Cookie', [cookieValue]);
    return;
  }

  const values = Array.isArray(previous) ? previous : [previous];
  response.setHeader('Set-Cookie', [...values, cookieValue]);
}

export function serializeCookie(name, value, options = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`];

  if (options.maxAge !== undefined) {
    parts.push(`Max-Age=${options.maxAge}`);
  }
  if (options.httpOnly !== false) {
    parts.push('HttpOnly');
  }
  if (options.sameSite) {
    parts.push(`SameSite=${options.sameSite}`);
  } else {
    parts.push('SameSite=Lax');
  }
  if (options.path) {
    parts.push(`Path=${options.path}`);
  } else {
    parts.push('Path=/');
  }
  if (options.secure) {
    parts.push('Secure');
  }

  return parts.join('; ');
}

export function setCookie(response, name, value, options = {}) {
  appendCookie(response, serializeCookie(name, value, options));
}

export function clearCookie(response, name, options = {}) {
  appendCookie(response, serializeCookie(name, '', {
    ...options,
    maxAge: 0
  }));
}

export function getRequestUrl(request) {
  return new URL(request.url || '/', 'http://localhost');
}

export function getClientIp(request) {
  const forwarded = request.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }

  return request.socket.remoteAddress || '127.0.0.1';
}

