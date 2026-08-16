import questionBank from '../src/data/questionBank.js';
import { normalizeComparableText } from './security.mjs';

const QUESTION_MAP = new Map(questionBank.map((question) => [String(question.id), question]));

export function getQuestionById(questionId) {
  return QUESTION_MAP.get(String(questionId)) || null;
}

export function getQuestionSnapshot(questionId) {
  const question = getQuestionById(questionId);
  if (!question) {
    return null;
  }

  return {
    id: String(question.id),
    materia: question.materia,
    domanda: question.domanda,
    rispostaCorretta: question.rispostaCorretta,
    opzioniValide: [
      question.rispostaCorretta,
      ...(Array.isArray(question.risposteErrate) ? question.risposteErrate : [])
    ]
  };
}

export function isValidQuestionId(questionId) {
  return QUESTION_MAP.has(String(questionId));
}

export function isValidAnswerText(questionId, selectedText) {
  const snapshot = getQuestionSnapshot(questionId);
  if (!snapshot) {
    return false;
  }

  const normalizedSelected = normalizeComparableText(selectedText);
  return snapshot.opzioniValide
    .map((option) => normalizeComparableText(option))
    .includes(normalizedSelected);
}

export function isCorrectAnswerText(questionId, selectedText) {
  const snapshot = getQuestionSnapshot(questionId);
  if (!snapshot) {
    return false;
  }

  return normalizeComparableText(snapshot.rispostaCorretta) === normalizeComparableText(selectedText);
}

