import rawQuestionBank from './questionBank.js';
import {
  buildQuestionSignature,
  normalizeComparableText
} from '../utils/textNormalization.js';

export const QUESTION_BANK_VERSION = '2026-08-17-deduplicated-v5';

const signatureMap = new Map();
const rawQuestionMap = new Map();
const canonicalQuestionMap = new Map();
const canonicalIdByQuestionId = new Map();
const exactDuplicateGroups = [];

rawQuestionBank.forEach((question) => {
  rawQuestionMap.set(String(question.id), question);

  const signature = buildQuestionSignature(question);
  const existing = signatureMap.get(signature);

  if (!existing) {
    const canonicalQuestion = {
      ...question,
      duplicateSourceIds: [String(question.id)],
      duplicateSourceCount: 1
    };

    signatureMap.set(signature, canonicalQuestion);
    canonicalQuestionMap.set(String(question.id), canonicalQuestion);
    canonicalIdByQuestionId.set(String(question.id), String(question.id));
    return;
  }

  existing.duplicateSourceIds.push(String(question.id));
  existing.duplicateSourceCount = existing.duplicateSourceIds.length;
  canonicalIdByQuestionId.set(String(question.id), String(existing.id));
});

const canonicalQuestions = Array.from(signatureMap.values()).map((question) => ({
  ...question,
  duplicateSourceIds: [...question.duplicateSourceIds]
}));

canonicalQuestions.forEach((question) => {
  if (question.duplicateSourceIds.length > 1) {
    exactDuplicateGroups.push({
      canonicalId: String(question.id),
      duplicateIds: question.duplicateSourceIds.filter((item) => item !== String(question.id)),
      allIds: [...question.duplicateSourceIds],
      materia: question.materia,
      domanda: question.domanda,
      rispostaCorretta: question.rispostaCorretta,
      risposte: [
        question.rispostaCorretta,
        ...(Array.isArray(question.risposteErrate) ? question.risposteErrate : [])
      ]
    });
  }
});

export const QUESTION_CATALOG_SUMMARY = {
  totalRawQuestions: rawQuestionBank.length,
  totalCanonicalQuestions: canonicalQuestions.length,
  totalExactDuplicateGroups: exactDuplicateGroups.length,
  totalExactDuplicateRows: rawQuestionBank.length - canonicalQuestions.length
};

export function getCanonicalQuestionId(questionId) {
  const normalizedId = String(questionId || '');
  if (!normalizedId) {
    return null;
  }

  const canonicalId = canonicalIdByQuestionId.get(normalizedId);
  if (canonicalId) {
    return canonicalId;
  }

  return rawQuestionMap.has(normalizedId) ? normalizedId : null;
}

export function isCurrentQuestionBankVersion(value = '') {
  return String(value || '') === QUESTION_BANK_VERSION;
}

export function isLegacyDuplicateQuestionId(questionId) {
  const canonicalId = getCanonicalQuestionId(questionId);
  if (!canonicalId) {
    return false;
  }

  return String(questionId) !== canonicalId;
}

export function getRawQuestionById(questionId) {
  return rawQuestionMap.get(String(questionId)) || null;
}

export function getQuestionById(questionId) {
  const canonicalId = getCanonicalQuestionId(questionId);
  if (!canonicalId) {
    return null;
  }

  return canonicalQuestionMap.get(String(canonicalId)) || null;
}

export function getCanonicalQuestions() {
  return canonicalQuestions.map((question) => ({
    ...question,
    duplicateSourceIds: [...question.duplicateSourceIds]
  }));
}

export function getExactDuplicateGroups() {
  return exactDuplicateGroups.map((group) => ({
    ...group,
    duplicateIds: [...group.duplicateIds],
    allIds: [...group.allIds],
    risposte: [...group.risposte]
  }));
}

export function getQuestionSubjectCounts() {
  return canonicalQuestions.reduce((accumulator, question) => {
    accumulator[question.materia] = (accumulator[question.materia] || 0) + 1;
    return accumulator;
  }, {});
}

export function mergeQuestionStatsByCanonicalId(items = []) {
  return items.reduce((accumulator, item) => {
    const sourceQuestionId = String(item.questionId || item.id || '');
    const canonicalId = getCanonicalQuestionId(sourceQuestionId);

    if (!canonicalId) {
      return accumulator;
    }

    const question = getQuestionById(canonicalId);
    const current = accumulator[canonicalId] || {
      questionId: canonicalId,
      sourceQuestionIds: [],
      materia: question?.materia || item.materia || '',
      numeroVolteProposta: 0,
      numeroRisposteCorrette: 0,
      numeroRisposteErrate: 0,
      lastShownAt: '',
      lastAnsweredAt: '',
      updatedAt: ''
    };

    current.sourceQuestionIds.push(sourceQuestionId);
    current.numeroVolteProposta += Number(item.numeroVolteProposta || 0);
    current.numeroRisposteCorrette += Number(item.numeroRisposteCorrette || 0);
    current.numeroRisposteErrate += Number(item.numeroRisposteErrate || 0);
    current.lastShownAt = [current.lastShownAt, item.lastShownAt].sort().at(-1) || '';
    current.lastAnsweredAt = [current.lastAnsweredAt, item.lastAnsweredAt].sort().at(-1) || '';
    current.updatedAt = [current.updatedAt, item.updatedAt].sort().at(-1) || '';
    accumulator[canonicalId] = current;

    return accumulator;
  }, {});
}

export function normalizeQuestionAnswerText(value = '') {
  return normalizeComparableText(value);
}
