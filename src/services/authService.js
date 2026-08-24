import {
  applyActionCode,
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  reload,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../lib/firebase.js';
import { ApiError, toApiError } from './apiClient.js';
import {
  buildAppUser,
  loadSessionUser,
  normalizeEmail,
  requireCurrentUser,
  syncUserProfile
} from './firebaseRepository.js';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9().\-\s]{8,20}$/;

function buildActionSettings() {
  const origin = typeof window !== 'undefined'
    ? window.location.origin.replace('127.0.0.1', 'localhost')
    : 'https://simulatore-tolc-i.web.app';

  return {
    url: `${origin}/login`,
    handleCodeInApp: false
  };
}

function validateRegistrationPayload(payload) {
  const firstName = payload.firstName?.trim() || '';
  const lastName = payload.lastName?.trim() || '';
  const email = normalizeEmail(payload.email);
  const phone = payload.phone?.trim() || '';
  const password = payload.password || '';
  const confirmPassword = payload.confirmPassword || '';

  if (!firstName) {
    throw new ApiError('Il nome è obbligatorio.', {
      status: 400,
      code: 'INVALID_FIRST_NAME',
      details: { field: 'firstName' }
    });
  }

  if (!lastName) {
    throw new ApiError('Il cognome è obbligatorio.', {
      status: 400,
      code: 'INVALID_LAST_NAME',
      details: { field: 'lastName' }
    });
  }

  if (!EMAIL_REGEX.test(email)) {
    throw new ApiError('L’indirizzo email inserito non è valido.', {
      status: 400,
      code: 'INVALID_EMAIL',
      details: { field: 'email' }
    });
  }

  if (!PHONE_REGEX.test(phone)) {
    throw new ApiError('Il numero di cellulare inserito non è valido.', {
      status: 400,
      code: 'INVALID_PHONE',
      details: { field: 'phone' }
    });
  }

  if (password.length < 8 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
    throw new ApiError('La password deve contenere almeno 8 caratteri, una lettera e un numero.', {
      status: 400,
      code: 'INVALID_PASSWORD',
      details: { field: 'password' }
    });
  }

  if (password !== confirmPassword) {
    throw new ApiError('Le password inserite non coincidono.', {
      status: 400,
      code: 'PASSWORD_MISMATCH',
      details: { field: 'confirmPassword' }
    });
  }

  return {
    firstName,
    lastName,
    email,
    phone,
    password
  };
}

function validateResetPayload(payload) {
  const token = payload.token?.trim() || '';
  const password = payload.password || '';
  const confirmPassword = payload.confirmPassword || '';

  if (!token) {
    throw new ApiError('Il link di recupero non contiene un codice valido.', {
      status: 400,
      code: 'INVALID_ACTION_CODE'
    });
  }

  if (password.length < 8 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
    throw new ApiError('La password deve contenere almeno 8 caratteri, una lettera e un numero.', {
      status: 400,
      code: 'INVALID_PASSWORD',
      details: { field: 'password' }
    });
  }

  if (password !== confirmPassword) {
    throw new ApiError('Le password inserite non coincidono.', {
      status: 400,
      code: 'PASSWORD_MISMATCH',
      details: { field: 'confirmPassword' }
    });
  }

  return {
    token,
    password
  };
}

export function observeAuthSession(onChange, onError) {
  return onAuthStateChanged(
    auth,
    async () => {
      try {
        const user = await loadSessionUser();
        onChange({
          user,
          mailDeliveryMode: 'firebase'
        });
      } catch (error) {
        onError(toApiError(error, 'Non riesco a caricare la sessione Firebase.'));
      }
    },
    (error) => {
      onError(toApiError(error, 'Non riesco a inizializzare l’autenticazione Firebase.'));
    }
  );
}

export async function getHealth() {
  return {
    user: await loadSessionUser(),
    mailDeliveryMode: 'firebase'
  };
}

export async function getCurrentSession() {
  return {
    user: await loadSessionUser(),
    mailDeliveryMode: 'firebase'
  };
}

export async function registerUser(payload) {
  const profile = validateRegistrationPayload(payload);

  try {
    const credentials = await createUserWithEmailAndPassword(auth, profile.email, profile.password);
    await updateProfile(credentials.user, {
      displayName: `${profile.firstName} ${profile.lastName}`.trim()
    });
    await syncUserProfile(credentials.user, profile);
    await sendEmailVerification(credentials.user, buildActionSettings());

    return {
      email: profile.email
    };
  } catch (error) {
    throw toApiError(error, 'Non riesco a completare la registrazione in questo momento.');
  }
}

export async function loginUser(payload) {
  const identifier = normalizeEmail(payload.identifier);
  const password = payload.password || '';

  try {
    const credentials = await signInWithEmailAndPassword(auth, identifier, password);

    try {
      await reload(credentials.user);
    } catch {
      // Manteniamo lo stato locale dell'utente se il refresh non riesce.
    }

    const profile = await syncUserProfile(credentials.user);
    const user = buildAppUser(credentials.user, profile);

    if (!credentials.user.emailVerified) {
      throw new ApiError('Devi confermare il tuo indirizzo email prima di accedere.', {
        status: 403,
        code: 'EMAIL_NOT_VERIFIED'
      });
    }

    return { user };
  } catch (error) {
    throw toApiError(error, 'Non riesco a completare l’accesso in questo momento.');
  }
}

export async function logoutUser() {
  await signOut(auth);
  return { ok: true };
}

export async function resendVerificationEmail(payload = {}) {
  const currentUser = await requireCurrentUser();
  const currentEmail = normalizeEmail(currentUser.email || '');
  const requestedEmail = normalizeEmail(payload.email || currentEmail);

  if (requestedEmail && currentEmail && requestedEmail !== currentEmail) {
    throw new ApiError('Per sicurezza puoi reinviare la verifica solo all’email dell’account attualmente aperto.', {
      status: 400,
      code: 'EMAIL_MISMATCH'
    });
  }

  try {
    await reload(currentUser);
  } catch {
    // Continuiamo con i dati già presenti lato client.
  }

  if (currentUser.emailVerified) {
    await syncUserProfile(currentUser);
    return { alreadyVerified: true };
  }

  try {
    await sendEmailVerification(currentUser, buildActionSettings());
    return { ok: true };
  } catch (error) {
    throw toApiError(error, 'Non riesco a inviare una nuova email di conferma.');
  }
}

export async function verifyEmailToken(token) {
  const safeToken = token?.trim();

  if (!safeToken) {
    throw new ApiError('Il link di conferma non contiene un codice valido.', {
      status: 400,
      code: 'INVALID_ACTION_CODE'
    });
  }

  try {
    await applyActionCode(auth, safeToken);

    if (auth.currentUser) {
      try {
        await reload(auth.currentUser);
      } catch {
        // Se il refresh non riesce, l’aggiornamento avverrà al prossimo accesso.
      }
      await syncUserProfile(auth.currentUser);
    }

    return { ok: true };
  } catch (error) {
    throw toApiError(error, 'Non riesco a confermare questo indirizzo email.');
  }
}

export async function forgotPassword(payload) {
  const email = normalizeEmail(payload?.email);

  if (!EMAIL_REGEX.test(email)) {
    throw new ApiError('L’indirizzo email inserito non è valido.', {
      status: 400,
      code: 'INVALID_EMAIL',
      details: { field: 'email' }
    });
  }

  try {
    await sendPasswordResetEmail(auth, email, buildActionSettings());
    return { ok: true };
  } catch (error) {
    const apiError = toApiError(error, 'Non riesco a inviare il link di recupero.');
    if (apiError.code === 'INVALID_CREDENTIALS') {
      return { ok: true };
    }
    throw apiError;
  }
}

export async function resetPassword(payload) {
  const { token, password } = validateResetPayload(payload);

  try {
    await confirmPasswordReset(auth, token, password);
    return { ok: true };
  } catch (error) {
    throw toApiError(error, 'Non riesco ad aggiornare la password con questo link.');
  }
}

export async function getLocalOutbox() {
  return {
    items: []
  };
}
