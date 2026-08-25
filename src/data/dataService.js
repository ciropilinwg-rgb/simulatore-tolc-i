// Data Service — Punto di accesso unico alla banca dati
//
// Oggi: legge le domande dal catalogo locale deduplicato
// Domani: basterà modificare SOLO questo file per leggere da Supabase
//         senza toccare la logica del quiz o i componenti.

import questionBank from './questionBank.js';
import {
  getCanonicalQuestions,
  getTolcPoolQuestions,
  getQuestionSubjectCounts,
  getActiveQuestionSubjectCounts,
  getQuestionById as getCatalogQuestionById,
  QUESTION_CATALOG_SUMMARY
} from './questionCatalog.js';

/**
 * Restituisce i quesiti del pool attivo per le nuove esercitazioni (307 quesiti).
 * Esclude rigorosamente i 35 record legacy (excludedFromTolcPool: true).
 * API asincrona: predisposta per la futura integrazione con Supabase.
 *
 * @returns {Promise<Array>} Array di oggetti domanda attivi
 */
export async function getQuestions() {
  return Promise.resolve(getTolcPoolQuestions());
}

/**
 * Restituisce l'intera banca dati fisica (342 record fisici).
 * Include sia i quesiti attivi sia i record legacy per storico, lookup e audit.
 *
 * @returns {Promise<Array>} Array completo dei 342 record fisici
 */
export async function getAllQuestions() {
  return Promise.resolve(questionBank);
}

/**
 * Restituisce le materie disponibili nella banca dati attiva (4 materie).
 *
 * @returns {Promise<string[]>} Array di nomi di materie (senza duplicati)
 */
export async function getMaterie() {
  return Object.keys(getActiveQuestionSubjectCounts());
}

/**
 * Restituisce le domande filtrate per materia all'interno del pool attivo.
 *
 * @param {string[]} materie - Array di materie da includere
 * @returns {Promise<Array>} Array di domande filtrate
 */
export async function getQuestionsByMaterie(materie) {
  const questions = await getQuestions();
  if (!materie || materie.length === 0) {
    return questions;
  }
  return questions.filter(q => materie.includes(q.materia));
}

/**
 * Recupera un quesito per ID sull'intera banca fisica (inclusi i record legacy).
 *
 * @param {number|string} id - Identificativo numerico o stringa del quesito
 * @returns {Promise<object|null>} Oggetto quesito o null se non trovato
 */
export async function getQuestionById(id) {
  return Promise.resolve(getCatalogQuestionById(id));
}

export async function getQuestionCatalogSummary() {
  return Promise.resolve({
    totalQuestions: QUESTION_CATALOG_SUMMARY.totalTolcPoolQuestions || QUESTION_CATALOG_SUMMARY.totalCanonicalQuestions,
    canonicalQuestions: QUESTION_CATALOG_SUMMARY.totalCanonicalQuestions,
    rawQuestions: QUESTION_CATALOG_SUMMARY.totalRawQuestions,
    legacyExcluded: QUESTION_CATALOG_SUMMARY.totalLegacyExcluded,
    exactDuplicateGroups: QUESTION_CATALOG_SUMMARY.totalExactDuplicateGroups,
    exactDuplicateRows: QUESTION_CATALOG_SUMMARY.totalExactDuplicateRows,
    bySubject: getActiveQuestionSubjectCounts()
  });
}
