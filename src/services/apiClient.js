export class ApiError extends Error {
  constructor(message, { status = 500, code = 'APP_ERROR', details = null } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

function fieldError(message, field, options = {}) {
  return new ApiError(message, {
    ...options,
    details: { field }
  });
}

export function toApiError(error, fallbackMessage = 'Si è verificato un errore inatteso.') {
  if (error instanceof ApiError) {
    return error;
  }

  const code = typeof error?.code === 'string' ? error.code : '';

  switch (code) {
    case 'auth/email-already-in-use':
      return fieldError('Esiste già un account associato a questo indirizzo email.', 'email', {
        status: 409,
        code: 'EMAIL_ALREADY_IN_USE'
      });
    case 'auth/invalid-email':
      return fieldError('L’indirizzo email inserito non è valido.', 'email', {
        status: 400,
        code: 'INVALID_EMAIL'
      });
    case 'auth/weak-password':
      return fieldError('La password deve essere più sicura.', 'password', {
        status: 400,
        code: 'WEAK_PASSWORD'
      });
    case 'auth/invalid-login-credentials':
    case 'auth/invalid-credential':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return new ApiError('Credenziali non valide. Controlla email e password e riprova.', {
        status: 401,
        code: 'INVALID_CREDENTIALS'
      });
    case 'auth/user-disabled':
      return new ApiError('Questo account è stato disabilitato.', {
        status: 403,
        code: 'ACCOUNT_DISABLED'
      });
    case 'auth/too-many-requests':
      return new ApiError('Hai effettuato troppi tentativi. Attendi qualche minuto e riprova.', {
        status: 429,
        code: 'TOO_MANY_REQUESTS'
      });
    case 'auth/network-request-failed':
    case 'unavailable':
      return new ApiError('Connessione non disponibile. Controlla la rete e riprova.', {
        status: 503,
        code: 'NETWORK_ERROR'
      });
    case 'auth/expired-action-code':
      return new ApiError('Il link non è più valido perché è scaduto. Richiedine uno nuovo.', {
        status: 400,
        code: 'ACTION_CODE_EXPIRED'
      });
    case 'auth/invalid-action-code':
      return new ApiError('Il link non è valido o è già stato utilizzato.', {
        status: 400,
        code: 'INVALID_ACTION_CODE'
      });
    case 'auth/unauthorized-continue-uri':
      return new ApiError('Il dominio dell’app non è ancora autorizzato in Firebase Authentication.', {
        status: 400,
        code: 'UNAUTHORIZED_DOMAIN'
      });
    case 'permission-denied':
      return new ApiError('Non hai i permessi necessari per accedere a questi dati.', {
        status: 403,
        code: 'PERMISSION_DENIED'
      });
    default:
      return new ApiError(fallbackMessage, {
        code: code || 'APP_ERROR'
      });
  }
}
