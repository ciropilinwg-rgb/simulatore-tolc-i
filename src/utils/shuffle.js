// Utility di randomizzazione — Simulatore Concorso

/**
 * Mescola un array usando l'algoritmo Fisher-Yates.
 * Restituisce un NUOVO array (non modifica l'originale).
 *
 * @param {Array} array - L'array da mescolare
 * @returns {Array} Nuovo array con elementi in ordine casuale
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Estrae N elementi casuali da un array, senza ripetizioni.
 * Restituisce un NUOVO array.
 *
 * @param {Array} array - L'array sorgente
 * @param {number} count - Numero di elementi da estrarre
 * @returns {Array} Nuovo array con N elementi casuali
 * @throws {Error} Se count è maggiore della lunghezza dell'array
 */
export function pickRandom(array, count) {
  if (count > array.length) {
    throw new Error(
      `Impossibile estrarre ${count} domande: ne sono disponibili solo ${array.length}.`
    );
  }
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, count);
}

/**
 * Prepara le opzioni di risposta per una domanda.
 * Crea oggetti con id stabile, testo e flag isCorrect,
 * poi li mescola in ordine casuale.
 *
 * @param {object} question - Oggetto domanda dalla banca dati
 * @returns {Array} Array di opzioni randomizzate: { id, text, isCorrect }
 */
export function prepareShuffledOptions(question) {
  const isDaVerificare = !!question.daVerificare;

  // Crea l'opzione corretta con id stabile
  const correctOption = {
    id: `q${question.id}_correct`,
    text: question.rispostaCorretta,
    image: question.rispostaCorrettaImg || null,
    isCorrect: isDaVerificare ? false : true,
    daVerificare: isDaVerificare
  };

  // Crea le opzioni errate con id stabili
  const wrongOptions = question.risposteErrate.map((text, index) => ({
    id: `q${question.id}_wrong_${index}`,
    text,
    image: question.risposteErrateImg ? question.risposteErrateImg[index] : null,
    isCorrect: false,
    daVerificare: isDaVerificare
  }));

  // Mescola tutte le opzioni insieme
  return shuffleArray([correctOption, ...wrongOptions]);
}
