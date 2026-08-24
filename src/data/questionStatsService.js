import { runTransaction } from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { ApiError, toApiError } from '../services/apiClient.js';
import {
  listQuestionStatDocs,
  nowIso,
  questionStatDocRef,
  quizSessionDocRef,
  requireVerifiedUser,
  toSessionQuestionKey
} from '../services/firebaseRepository.js';
import {
  getCanonicalQuestionId,
  getQuestionById,
  mergeQuestionStatsByCanonicalId,
  normalizeQuestionAnswerText,
  QUESTION_BANK_VERSION
} from './questionCatalog.js';

function toNumber(value) {
  return Number.isFinite(value) ? value : Number(value || 0);
}

function calculateErrorPercentage(correctCount, wrongCount) {
  const total = correctCount + wrongCount;
  if (total <= 0) {
    return 0;
  }
  return Math.round((wrongCount / total) * 100);
}

function toCanonicalQuestionIdOrThrow(questionId) {
  const canonicalQuestionId = getCanonicalQuestionId(questionId);
  if (!canonicalQuestionId) {
    throw new ApiError('La domanda selezionata non esiste nella banca dati aggiornata.', {
      status: 404,
      code: 'QUESTION_NOT_FOUND'
    });
  }

  return canonicalQuestionId;
}

function isCorrectAnswer(questionId, selectedText) {
  const question = getQuestionById(questionId);
  if (!question) {
    throw new ApiError('La domanda selezionata non esiste nella banca dati.', {
      status: 404,
      code: 'QUESTION_NOT_FOUND'
    });
  }

  return normalizeQuestionAnswerText(question.rispostaCorretta) === normalizeQuestionAnswerText(selectedText);
}

export async function getUserStats() {
  const currentUser = await requireVerifiedUser();
  const items = await listQuestionStatDocs(currentUser.uid);
  const merged = mergeQuestionStatsByCanonicalId(
    items.filter((item) => item.bankVersion === QUESTION_BANK_VERSION)
  );

  return Object.fromEntries(
    Object.entries(merged).map(([questionId, item]) => {
      const corrette = toNumber(item.numeroRisposteCorrette);
      const errate = toNumber(item.numeroRisposteErrate);

      return [questionId, {
        numeroVolteProposta: toNumber(item.numeroVolteProposta),
        numeroRisposteCorrette: corrette,
        numeroRisposteErrate: errate,
        percentualeErrore: calculateErrorPercentage(corrette, errate),
        sourceQuestionIds: [...(item.sourceQuestionIds || [])]
      }];
    })
  );
}

export async function createQuizSession({ sessionId, selectionMode, selectedMaterie, questionIds, requestedCount }) {
  const currentUser = await requireVerifiedUser();
  const sessionRef = quizSessionDocRef(currentUser.uid, sessionId);
  const safeQuestionIds = Array.isArray(questionIds)
    ? [...new Set(
      questionIds
        .map((item) => getCanonicalQuestionId(item))
        .filter(Boolean)
    )]
    : [];

  try {
    await runTransaction(db, async (transaction) => {
      const existing = await transaction.get(sessionRef);
      if (existing.exists()) {
        return;
      }

      const timestamp = nowIso();

      transaction.set(sessionRef, {
        sessionKey: String(sessionId),
        bankVersion: QUESTION_BANK_VERSION,
        selectionMode: selectionMode || 'RANDOM',
        selectedSubjects: Array.isArray(selectedMaterie) ? selectedMaterie.filter(Boolean) : [],
        questionIds: safeQuestionIds,
        requestedCount: Number(requestedCount || safeQuestionIds.length),
        totalQuestions: safeQuestionIds.length,
        shownQuestionKeys: {},
        answeredByQuestion: {},
        correctCount: 0,
        wrongCount: 0,
        unansweredCount: safeQuestionIds.length,
        percentage: 0,
        status: 'active',
        createdAt: timestamp,
        updatedAt: timestamp,
        finishedAt: null
      });
    });

    return {
      sessionKey: String(sessionId)
    };
  } catch (error) {
    throw toApiError(error, 'Non riesco a creare la sessione del quiz.');
  }
}

export async function recordQuestionShown({ sessionId, questionId }) {
  const currentUser = await requireVerifiedUser();
  const canonicalQuestionId = toCanonicalQuestionIdOrThrow(questionId);
  const sessionRef = quizSessionDocRef(currentUser.uid, sessionId);
  const statsRef = questionStatDocRef(currentUser.uid, canonicalQuestionId);

  try {
    await runTransaction(db, async (transaction) => {
      const sessionSnapshot = await transaction.get(sessionRef);
      if (!sessionSnapshot.exists()) {
        throw new ApiError('La sessione del quiz non esiste più.', {
          status: 404,
          code: 'SESSION_NOT_FOUND'
        });
      }

      const sessionData = sessionSnapshot.data();
      if (sessionData.bankVersion !== QUESTION_BANK_VERSION) {
        throw new ApiError('Questa esercitazione appartiene a una versione precedente della banca dati. Avviane una nuova.', {
          status: 409,
          code: 'QUESTION_BANK_VERSION_MISMATCH'
        });
      }

      const mapKey = toSessionQuestionKey(canonicalQuestionId);
      const shownQuestionKeys = { ...(sessionData.shownQuestionKeys || {}) };

      if (shownQuestionKeys[mapKey]) {
        return;
      }

      const statsSnapshot = await transaction.get(statsRef);
      const currentStats = statsSnapshot.exists() ? statsSnapshot.data() : {};
      const timestamp = nowIso();
      const question = getQuestionById(canonicalQuestionId);

      shownQuestionKeys[mapKey] = true;

      transaction.set(sessionRef, {
        shownQuestionKeys,
        updatedAt: timestamp
      }, { merge: true });

      transaction.set(statsRef, {
        questionId: String(canonicalQuestionId),
        bankVersion: QUESTION_BANK_VERSION,
        materia: question?.materia || '',
        numeroVolteProposta: toNumber(currentStats.numeroVolteProposta) + 1,
        numeroRisposteCorrette: toNumber(currentStats.numeroRisposteCorrette),
        numeroRisposteErrate: toNumber(currentStats.numeroRisposteErrate),
        percentualeErrore: calculateErrorPercentage(
          toNumber(currentStats.numeroRisposteCorrette),
          toNumber(currentStats.numeroRisposteErrate)
        ),
        lastShownAt: timestamp,
        updatedAt: timestamp
      }, { merge: true });
    });

    return { ok: true };
  } catch (error) {
    throw toApiError(error, 'Non riesco a registrare la domanda mostrata.');
  }
}

export async function recordAnswer({ sessionId, questionId, selectedText }) {
  const currentUser = await requireVerifiedUser();
  const canonicalQuestionId = toCanonicalQuestionIdOrThrow(questionId);
  const sessionRef = quizSessionDocRef(currentUser.uid, sessionId);
  const statsRef = questionStatDocRef(currentUser.uid, canonicalQuestionId);

  try {
    await runTransaction(db, async (transaction) => {
      const sessionSnapshot = await transaction.get(sessionRef);
      if (!sessionSnapshot.exists()) {
        throw new ApiError('La sessione del quiz non esiste più.', {
          status: 404,
          code: 'SESSION_NOT_FOUND'
        });
      }

      const sessionData = sessionSnapshot.data();
      if (sessionData.bankVersion !== QUESTION_BANK_VERSION) {
        throw new ApiError('Questa esercitazione appartiene a una versione precedente della banca dati. Avviane una nuova.', {
          status: 409,
          code: 'QUESTION_BANK_VERSION_MISMATCH'
        });
      }

      const mapKey = toSessionQuestionKey(canonicalQuestionId);
      const answeredByQuestion = { ...(sessionData.answeredByQuestion || {}) };

      if (answeredByQuestion[mapKey]) {
        return;
      }

      const question = getQuestionById(canonicalQuestionId);
      const isDaVerificare = Boolean(question?.daVerificare);
      const correct = isDaVerificare ? false : isCorrectAnswer(canonicalQuestionId, selectedText);
      const statsSnapshot = await transaction.get(statsRef);
      const currentStats = statsSnapshot.exists() ? statsSnapshot.data() : {};
      const correctCount = toNumber(currentStats.numeroRisposteCorrette) + (correct ? 1 : 0);
      const wrongCount = toNumber(currentStats.numeroRisposteErrate) + (!isDaVerificare && !correct ? 1 : 0);
      const timestamp = nowIso();

      answeredByQuestion[mapKey] = {
        questionId: String(canonicalQuestionId),
        selectedText: String(selectedText),
        isCorrect: isDaVerificare ? null : correct,
        daVerificare: isDaVerificare,
        answeredAt: timestamp
      };

      transaction.set(sessionRef, {
        answeredByQuestion,
        correctCount: toNumber(sessionData.correctCount) + (correct ? 1 : 0),
        wrongCount: toNumber(sessionData.wrongCount) + (!isDaVerificare && !correct ? 1 : 0),
        unansweredCount: Math.max(toNumber(sessionData.unansweredCount) - 1, 0),
        updatedAt: timestamp
      }, { merge: true });

      transaction.set(statsRef, {
        questionId: String(canonicalQuestionId),
        bankVersion: QUESTION_BANK_VERSION,
        materia: question?.materia || '',
        numeroVolteProposta: toNumber(currentStats.numeroVolteProposta),
        numeroRisposteCorrette: correctCount,
        numeroRisposteErrate: wrongCount,
        percentualeErrore: calculateErrorPercentage(correctCount, wrongCount),
        lastAnsweredAt: timestamp,
        updatedAt: timestamp
      }, { merge: true });

    });

    return { ok: true };
  } catch (error) {
    throw toApiError(error, 'Non riesco a registrare la risposta selezionata.');
  }
}

export async function finishQuizSession({ sessionId }) {
  const currentUser = await requireVerifiedUser();
  const sessionRef = quizSessionDocRef(currentUser.uid, sessionId);

  try {
    await runTransaction(db, async (transaction) => {
      const sessionSnapshot = await transaction.get(sessionRef);
      if (!sessionSnapshot.exists()) {
        return;
      }

      const sessionData = sessionSnapshot.data();
      if (sessionData.status === 'finished') {
        return;
      }

      const totalQuestions = toNumber(sessionData.totalQuestions || sessionData.questionIds?.length);
      const correctCount = toNumber(sessionData.correctCount);
      const wrongCount = toNumber(sessionData.wrongCount);
      const unansweredCount = Math.max(totalQuestions - correctCount - wrongCount, 0);
      const percentage = totalQuestions > 0
        ? Math.round((correctCount / totalQuestions) * 100)
        : 0;
      const timestamp = nowIso();

      transaction.set(sessionRef, {
        totalQuestions,
        unansweredCount,
        percentage,
        status: 'finished',
        finishedAt: timestamp,
        updatedAt: timestamp
      }, { merge: true });
    });

    return { ok: true };
  } catch (error) {
    throw toApiError(error, 'Non riesco a chiudere correttamente questa sessione.');
  }
}
