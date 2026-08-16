// Quiz Engine — Motore del quiz (v2)
//
// Si occupa di:
// - Selezionare le domande secondo tre modalità (Casuale, Maggiori errori, Meno svolte)
// - Preparare le opzioni randomizzate
// - Creare lo stato iniziale delle risposte
//
// Le tre modalità influenzano SOLO la fase di selezione.
// Dopo la selezione, il flusso del quiz è identico.

import { pickRandom, shuffleArray, prepareShuffledOptions } from '../utils/shuffle.js';

// ─── Costanti ───

export const DEFAULT_QUESTION_COUNT = 10;

/**
 * Codici interni delle modalità di selezione.
 * NON usare le etichette visualizzate come identificatori.
 */
export const SELECTION_MODES = {
  RANDOM: 'RANDOM',
  HIGHEST_ERROR_RATE: 'HIGHEST_ERROR_RATE',
  LEAST_PRACTICED: 'LEAST_PRACTICED'
};

/**
 * Etichette italiane per l'interfaccia utente.
 */
export const SELECTION_MODE_LABELS = {
  [SELECTION_MODES.RANDOM]: 'Casuale',
  [SELECTION_MODES.HIGHEST_ERROR_RATE]: 'Maggiori errori',
  [SELECTION_MODES.LEAST_PRACTICED]: 'Meno svolte'
};

/**
 * Icone per l'interfaccia utente.
 */
export const SELECTION_MODE_ICONS = {
  [SELECTION_MODES.RANDOM]: '🎲',
  [SELECTION_MODES.HIGHEST_ERROR_RATE]: '🎯',
  [SELECTION_MODES.LEAST_PRACTICED]: '🔄'
};

/**
 * Descrizioni per l'interfaccia utente.
 */
export const SELECTION_MODE_DESCRIPTIONS = {
  [SELECTION_MODES.RANDOM]: 'Estrazione casuale tra le materie selezionate.',
  [SELECTION_MODES.HIGHEST_ERROR_RATE]: 'Priorità alle domande nelle quali sbagli più frequentemente.',
  [SELECTION_MODES.LEAST_PRACTICED]: 'Priorità alle domande affrontate meno volte, partendo da quelle mai svolte.'
};

// ─── Funzioni di selezione ───

/**
 * Modalità CASUALE: mescola casualmente e seleziona i primi N.
 *
 * @param {Array} pool - Domande disponibili (già filtrate per materia)
 * @param {number} count - Numero di domande da estrarre
 * @returns {Array} Domande selezionate
 */
export function selectRandomQuestions(pool, count) {
  return pickRandom(pool, Math.min(count, pool.length));
}

/**
 * Modalità MAGGIORI ERRORI: privilegia le domande con percentuale di errore più alta.
 *
 * Algoritmo:
 * 1. Separa domande svolte (svolgimenti > 0) da mai svolte (svolgimenti = 0)
 * 2. Per le svolte: calcola percentualeErrore = errate / svolgimenti
 * 3. Raggruppa per (percentualeErrore, erroriAssoluti)
 * 4. Ordina i gruppi: percentuale desc, poi errori assoluti desc
 * 5. Randomizza all'interno di ciascun gruppo (Fisher-Yates)
 * 6. Se servono altre domande, completa con le mai svolte (randomizzate)
 *
 * @param {Array} pool - Domande disponibili
 * @param {number} count - Numero richiesto
 * @param {object} userStats - Mappa { [questionId]: { numeroRisposteCorrette, numeroRisposteErrate, ... } }
 * @returns {Array} Domande selezionate
 */
export function selectHighestErrorQuestions(pool, count, userStats) {
  const practiced = [];
  const neverPracticed = [];

  for (const q of pool) {
    const s = userStats[String(q.id)];
    const corrette = s ? (s.numeroRisposteCorrette || 0) : 0;
    const errate = s ? (s.numeroRisposteErrate || 0) : 0;
    const svolg = corrette + errate;

    if (svolg > 0) {
      practiced.push({
        question: q,
        percentualeErrore: errate / svolg,
        erroriAssoluti: errate
      });
    } else {
      neverPracticed.push(q);
    }
  }

  // Raggruppa per (percentualeErrore, erroriAssoluti)
  const groupMap = new Map();
  for (const p of practiced) {
    // Chiave: usa precisione sufficiente per evitare collisioni float
    const key = `${p.percentualeErrore.toFixed(12)}|${p.erroriAssoluti}`;
    if (!groupMap.has(key)) {
      groupMap.set(key, {
        perc: p.percentualeErrore,
        errori: p.erroriAssoluti,
        questions: []
      });
    }
    groupMap.get(key).questions.push(p.question);
  }

  // Ordina i gruppi: percentuale desc, poi errori assoluti desc
  const sortedGroups = Array.from(groupMap.values()).sort((a, b) => {
    if (Math.abs(b.perc - a.perc) > 1e-10) return b.perc - a.perc;
    return b.errori - a.errori;
  });

  // Randomizza all'interno di ciascun gruppo e concatena
  let result = [];
  for (const group of sortedGroups) {
    result = result.concat(shuffleArray([...group.questions]));
  }

  // Completa con le mai svolte se necessario
  if (result.length < count) {
    result = result.concat(shuffleArray([...neverPracticed]));
  }

  return result.slice(0, Math.min(count, result.length));
}

/**
 * Modalità MENO SVOLTE: privilegia le domande con meno svolgimenti.
 *
 * Algoritmo:
 * 1. Per ogni domanda: svolgimenti = corrette + errate
 * 2. Raggruppa per numero di svolgimenti
 * 3. Ordina i gruppi: svolgimenti asc (0 = massima priorità)
 * 4. Randomizza all'interno di ciascun gruppo (Fisher-Yates)
 *
 * @param {Array} pool - Domande disponibili
 * @param {number} count - Numero richiesto
 * @param {object} userStats - Mappa { [questionId]: { numeroRisposteCorrette, numeroRisposteErrate, ... } }
 * @returns {Array} Domande selezionate
 */
export function selectLeastPracticedQuestions(pool, count, userStats) {
  const groupMap = new Map();

  for (const q of pool) {
    const s = userStats[String(q.id)];
    const corrette = s ? (s.numeroRisposteCorrette || 0) : 0;
    const errate = s ? (s.numeroRisposteErrate || 0) : 0;
    const svolg = corrette + errate;

    if (!groupMap.has(svolg)) {
      groupMap.set(svolg, []);
    }
    groupMap.get(svolg).push(q);
  }

  // Ordina per svolgimenti crescenti
  const sortedKeys = Array.from(groupMap.keys()).sort((a, b) => a - b);

  // Randomizza all'interno di ciascun gruppo e concatena
  let result = [];
  for (const key of sortedKeys) {
    result = result.concat(shuffleArray([...groupMap.get(key)]));
  }

  return result.slice(0, Math.min(count, result.length));
}

/**
 * Funzione principale di selezione domande.
 * Applica filtro materie + modalità di selezione + randomizzazione risposte.
 *
 * @param {object} params
 * @param {Array} params.questions - Tutte le domande disponibili
 * @param {string[]} params.selectedSubjects - Materie selezionate
 * @param {number} params.count - Numero di domande richieste
 * @param {string} params.selectionMode - Codice della modalità (SELECTION_MODES)
 * @param {object} params.userStats - Statistiche utente
 * @returns {Array} Domande preparate con opzioni randomizzate
 */
export function selectQuestions({ questions, selectedSubjects, count, selectionMode, userStats }) {
  // 1. Filtra per materie
  let pool = questions;
  if (selectedSubjects && selectedSubjects.length > 0) {
    pool = pool.filter(q => selectedSubjects.includes(q.materia));
  }

  // 2. Seleziona in base alla modalità
  const effectiveCount = Math.min(count, pool.length);
  let selected;

  switch (selectionMode) {
    case SELECTION_MODES.HIGHEST_ERROR_RATE:
      selected = selectHighestErrorQuestions(pool, effectiveCount, userStats || {});
      break;
    case SELECTION_MODES.LEAST_PRACTICED:
      selected = selectLeastPracticedQuestions(pool, effectiveCount, userStats || {});
      break;
    case SELECTION_MODES.RANDOM:
    default:
      selected = selectRandomQuestions(pool, effectiveCount);
      break;
  }

  // 3. Prepara le opzioni randomizzate per ciascuna domanda
  return selected.map(question => ({
    ...question,
    shuffledOptions: prepareShuffledOptions(question)
  }));
}

/**
 * Genera un identificativo univoco per la sessione.
 *
 * @returns {string} ID sessione
 */
export function generateSessionId() {
  return `s_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Crea lo stato iniziale delle risposte.
 *
 * @param {number} count - Numero di domande
 * @returns {object} Mappa { 0: { selectedOptionId: null, isVerified: false, isCorrect: null }, ... }
 */
export function createEmptyAnswers(count) {
  const answers = {};
  for (let i = 0; i < count; i++) {
    answers[i] = {
      selectedOptionId: null,
      isVerified: false,
      isCorrect: null,
    };
  }
  return answers;
}
