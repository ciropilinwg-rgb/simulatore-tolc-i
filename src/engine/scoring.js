// Configurazione punteggio — Simulatore Concorso
//
// Questi valori possono essere modificati facilmente.
// Esempio futuro: +1 corretta, -0.33 errata, 0 non data

/**
 * Valori di punteggio per ciascun esito.
 * Modificare qui per cambiare il sistema di valutazione.
 */
export const SCORING_CONFIG = {
  correct: 1,      // Punti per risposta corretta
  wrong: 0,        // Punti per risposta errata
  unanswered: 0    // Punti per risposta non data
};

/**
 * Calcola i risultati dettagliati di un'esercitazione.
 *
 * Formato risposte atteso:
 *   answers[index] = { selectedOptionId, isVerified, isCorrect }
 *
 * @param {Array} questions - Array delle domande dell'esercitazione
 * @param {object} answers - Mappa { indice: { selectedOptionId, isVerified, isCorrect } }
 * @returns {object} Risultati dettagliati
 */
export function calculateResults(questions, answers) {
  let correct = 0;
  let wrong = 0;
  let unanswered = 0;

  const details = questions.map((question, index) => {
    const answer = answers[index];

    // Domanda non verificata o senza risposta
    if (!answer || !answer.isVerified || answer.selectedOptionId === null) {
      unanswered++;
      return {
        questionIndex: index,
        question,
        selectedOptionId: null,
        selectedText: null,
        selectedImage: null,
        correctText: question.rispostaCorretta,
        correctImage: question.rispostaCorrettaImg || null,
        isCorrect: false,
        isUnanswered: true,
        daVerificare: !!question.daVerificare
      };
    }

    // Domanda verificata
    const selectedOption = question.shuffledOptions?.find(
      opt => opt.id === answer.selectedOptionId
    );

    if (question.daVerificare) {
      return {
        questionIndex: index,
        question,
        selectedOptionId: answer.selectedOptionId,
        selectedText: selectedOption ? selectedOption.text : "Risposta non trovata",
        selectedImage: selectedOption ? selectedOption.image : null,
        correctText: question.rispostaCorretta,
        correctImage: question.rispostaCorrettaImg || null,
        isCorrect: null,
        isUnanswered: false,
        daVerificare: true
      };
    }

    if (answer.isCorrect) {
      correct++;
    } else {
      wrong++;
    }

    return {
      questionIndex: index,
      question,
      selectedOptionId: answer.selectedOptionId,
      selectedText: selectedOption ? selectedOption.text : "Risposta non trovata",
      selectedImage: selectedOption ? selectedOption.image : null,
      correctText: question.rispostaCorretta,
      correctImage: question.rispostaCorrettaImg || null,
      isCorrect: answer.isCorrect,
      isUnanswered: false,
      daVerificare: false
    };
  });

  const evaluableQuestions = questions.filter(q => !q.daVerificare).length;
  const total = questions.length;
  const percentage = evaluableQuestions > 0 ? Math.round((correct / evaluableQuestions) * 100) : 0;
  const score =
    correct * SCORING_CONFIG.correct +
    wrong * SCORING_CONFIG.wrong +
    unanswered * SCORING_CONFIG.unanswered;
  const maxScore = evaluableQuestions * SCORING_CONFIG.correct;

  return {
    total,
    evaluableQuestions,
    correct,
    wrong,
    unanswered,
    percentage,
    score,
    maxScore,
    details
  };
}
