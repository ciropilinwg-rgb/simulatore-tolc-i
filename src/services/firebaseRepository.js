import { getIdToken, reload } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase.js';
import { ApiError } from './apiClient.js';

const USERS_COLLECTION = 'users';
const QUESTION_STATS_COLLECTION = 'questionStats';
const QUIZ_SESSIONS_COLLECTION = 'quizSessions';
const ADMIN_REGISTRATION_NOTIFICATIONS_COLLECTION = 'adminRegistrationNotifications';

function cleanString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export function normalizeEmail(value = '') {
  return cleanString(value).toLowerCase();
}

export function nowIso() {
  return new Date().toISOString();
}

export function toSessionQuestionKey(questionId) {
  return `q_${String(questionId)}`;
}

export function profileDocRef(userId) {
  return doc(db, USERS_COLLECTION, userId);
}

export function questionStatsCollectionRef(userId) {
  return collection(db, USERS_COLLECTION, userId, QUESTION_STATS_COLLECTION);
}

export function questionStatDocRef(userId, questionId) {
  return doc(db, USERS_COLLECTION, userId, QUESTION_STATS_COLLECTION, String(questionId));
}

export function quizSessionsCollectionRef(userId) {
  return collection(db, USERS_COLLECTION, userId, QUIZ_SESSIONS_COLLECTION);
}

export function quizSessionDocRef(userId, sessionId) {
  return doc(db, USERS_COLLECTION, userId, QUIZ_SESSIONS_COLLECTION, String(sessionId));
}

export function adminRegistrationNotificationDocRef(userId) {
  return doc(db, ADMIN_REGISTRATION_NOTIFICATIONS_COLLECTION, String(userId));
}

export function buildAppUser(authUser, profileData = {}) {
  return {
    id: authUser.uid,
    firstName: cleanString(profileData.firstName) || 'Utente',
    lastName: cleanString(profileData.lastName),
    email: normalizeEmail(authUser.email || profileData.email),
    phone: cleanString(profileData.phone),
    emailVerified: Boolean(authUser.emailVerified),
    createdAt: profileData.createdAt || '',
    updatedAt: profileData.updatedAt || ''
  };
}

function buildAdminRegistrationNotification(authUser, profileData = {}) {
  const completedAt = nowIso();

  return {
    userId: authUser.uid,
    firstName: cleanString(profileData.firstName) || 'Utente',
    lastName: cleanString(profileData.lastName),
    email: normalizeEmail(authUser.email || profileData.email),
    phone: cleanString(profileData.phone),
    accountCreatedAt: profileData.createdAt || completedAt,
    registrationCompletedAt: completedAt,
    createdAt: completedAt,
    deliveryStatus: 'pending',
    source: 'firebase_profile_sync'
  };
}

async function ensureAdminRegistrationNotification(authUser, profileData = {}) {
  if (!authUser?.uid || !authUser.emailVerified) {
    return { queued: false };
  }

  const notificationRef = adminRegistrationNotificationDocRef(authUser.uid);
  const snapshot = await getDoc(notificationRef);

  if (snapshot.exists()) {
    return { queued: false, alreadyExists: true };
  }

  await setDoc(notificationRef, buildAdminRegistrationNotification(authUser, profileData));
  return { queued: true };
}

export async function syncUserProfile(authUser, profileSeed = {}) {
  const snapshot = await getDoc(profileDocRef(authUser.uid));
  const existing = snapshot.exists() ? snapshot.data() : {};

  const nextProfile = {
    firstName: cleanString(profileSeed.firstName) || cleanString(existing.firstName) || 'Utente',
    lastName: cleanString(profileSeed.lastName) || cleanString(existing.lastName),
    email: normalizeEmail(authUser.email || profileSeed.email || existing.email),
    phone: cleanString(profileSeed.phone) || cleanString(existing.phone),
    emailVerified: Boolean(authUser.emailVerified),
    createdAt: existing.createdAt || nowIso(),
    updatedAt: nowIso()
  };

  const shouldWrite = !snapshot.exists()
    || existing.firstName !== nextProfile.firstName
    || existing.lastName !== nextProfile.lastName
    || existing.email !== nextProfile.email
    || existing.phone !== nextProfile.phone
    || existing.emailVerified !== nextProfile.emailVerified;

  if (shouldWrite) {
    await setDoc(profileDocRef(authUser.uid), nextProfile, { merge: true });
  }

  try {
    await ensureAdminRegistrationNotification(authUser, nextProfile);
  } catch {
    // La registrazione dell'utente non deve mai fallire per un problema sulla notifica amministrativa.
  }

  return nextProfile;
}

export async function loadSessionUser() {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    return null;
  }

  try {
    await reload(currentUser);
  } catch {
    // Se il reload fallisce manteniamo comunque i dati già disponibili lato client.
  }

  if (currentUser.emailVerified) {
    try {
      await getIdToken(currentUser, true);
    } catch {
      // Se il refresh del token fallisce usiamo comunque la sessione locale.
    }
  }

  const profile = await syncUserProfile(currentUser);
  return buildAppUser(currentUser, profile);
}

export async function requireCurrentUser() {
  const currentUser = auth.currentUser;
  if (!currentUser) {
    throw new ApiError('Effettua l’accesso per continuare.', {
      status: 401,
      code: 'UNAUTHORIZED'
    });
  }
  return currentUser;
}

export async function requireVerifiedUser() {
  const currentUser = await requireCurrentUser();

  try {
    await reload(currentUser);
  } catch {
    // Manteniamo lo stato corrente se il reload non riesce.
  }

  if (!currentUser.emailVerified) {
    throw new ApiError('Devi confermare il tuo indirizzo email prima di usare l’area riservata.', {
      status: 403,
      code: 'EMAIL_NOT_VERIFIED'
    });
  }

  try {
    await getIdToken(currentUser, true);
  } catch {
    // Continuiamo con la sessione corrente se il refresh del token non riesce.
  }

  return currentUser;
}

export async function listQuestionStatDocs(userId) {
  const snapshot = await getDocs(questionStatsCollectionRef(userId));
  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));
}

export async function listQuizSessionDocs(userId) {
  const snapshot = await getDocs(quizSessionsCollectionRef(userId));
  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));
}
