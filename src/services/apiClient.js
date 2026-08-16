let unauthorizedHandler = null;

export class ApiError extends Error {
  constructor(message, { status = 500, code = 'API_ERROR', details = null } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export function setUnauthorizedHandler(handler) {
  unauthorizedHandler = typeof handler === 'function' ? handler : null;
}

export async function apiRequest(path, options = {}) {
  const {
    method = 'GET',
    body,
    headers = {},
    ignoreUnauthorized = false
  } = options;

  const requestHeaders = { ...headers };
  const fetchOptions = {
    method,
    credentials: 'include',
    headers: requestHeaders
  };

  if (body !== undefined) {
    requestHeaders['Content-Type'] = 'application/json';
    fetchOptions.body = JSON.stringify(body);
  }

  let response;
  try {
    response = await fetch(path, fetchOptions);
  } catch {
    throw new ApiError('Non riesco a raggiungere il server locale dell’applicazione.', {
      status: 0,
      code: 'NETWORK_ERROR'
    });
  }

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const error = payload?.error || {};
    const apiError = new ApiError(
      error.message || 'La richiesta non è andata a buon fine.',
      {
        status: response.status,
        code: error.code || 'API_ERROR',
        details: error.details || null
      }
    );

    if (!ignoreUnauthorized && response.status === 401 && unauthorizedHandler) {
      unauthorizedHandler(apiError);
    }

    throw apiError;
  }

  return payload;
}
