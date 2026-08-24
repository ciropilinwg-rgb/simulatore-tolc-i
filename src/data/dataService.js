// Data Service — Punto di accesso unico alla banca dati
//
// Oggi: legge le domande dal catalogo locale deduplicato
// Domani: basterà modificare SOLO questo file per leggere da Supabase
//         senza toccare la logica del quiz o i componenti.

import {
  getCanonicalQuestions,
  getQuestionSubjectCounts,
  QUESTION_CATALOG_SUMMARY
} from './questionCatalog.js';

/**
 * Restituisce tutte le domande disponibili nella banca dati.
 * API asincrona: predisposta per la futura integrazione con Supabase.
 *
 * @returns {Promise<Array>} Array di oggetti domanda
 */
export async function getQuestions() {
  return Promise.resolve(getCanonicalQuestions());
}

/**
 * Restituisce le materie disponibili nella banca dati.
 *
 * @returns {Promise<string[]>} Array di nomi di materie (senza duplicati)
 */
export async function getMaterie() {
  return Object.keys(getQuestionSubjectCounts());
}

/**
 * Restituisce le domande filtrate per materia.
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

export async function getQuestionCatalogSummary() {
  return Promise.resolve({
    totalQuestions: QUESTION_CATALOG_SUMMARY.totalCanonicalQuestions,
    rawQuestions: QUESTION_CATALOG_SUMMARY.totalRawQuestions,
    exactDuplicateGroups: QUESTION_CATALOG_SUMMARY.totalExactDuplicateGroups,
    exactDuplicateRows: QUESTION_CATALOG_SUMMARY.totalExactDuplicateRows,
    bySubject: getQuestionSubjectCounts()
  });
}
