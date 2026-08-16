// Data Service — Punto di accesso unico alla banca dati
//
// Oggi: legge le domande dal file locale questionBank.js
// Domani: basterà modificare SOLO questo file per leggere da Supabase
//         senza toccare la logica del quiz o i componenti.

import questionBank from './questionBank.js';

/**
 * Restituisce tutte le domande disponibili nella banca dati.
 * API asincrona: predisposta per la futura integrazione con Supabase.
 *
 * @returns {Promise<Array>} Array di oggetti domanda
 */
export async function getQuestions() {
  // Fase 1: dati locali (simuliamo una chiamata asincrona)
  return Promise.resolve(questionBank);
}

/**
 * Restituisce le materie disponibili nella banca dati.
 *
 * @returns {Promise<string[]>} Array di nomi di materie (senza duplicati)
 */
export async function getMaterie() {
  const questions = await getQuestions();
  const materieSet = new Set(questions.map(q => q.materia));
  return Array.from(materieSet);
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
