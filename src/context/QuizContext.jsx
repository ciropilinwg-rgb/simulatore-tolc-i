// QuizContext — Stato globale dell'esercitazione (v4)
//
// Gestisce il ciclo di vita completo:
// - Caricamento dati e materie
// - Configurazione (materie, numero domande, modalità di selezione)
// - Quiz con verifica immediata e blocco risposte
// - Tracking statistiche idempotente (sessionId + questionId)
// - Calcolo risultati
// - Reset completo

import { createContext, useContext, useReducer, useCallback, useEffect } from 'react';
import {
  selectQuestions,
  createEmptyAnswers,
  generateSessionId,
  SELECTION_MODES
} from '../engine/quizEngine.js';
import { calculateResults } from '../engine/scoring.js';
import { getQuestions } from '../data/dataService.js';
import {
  createQuizSession,
  finishQuizSession,
  getUserStats,
  recordQuestionShown,
  recordAnswer
} from '../data/questionStatsService.js';

// ─── Stato iniziale ───
const initialState = {
  // Navigazione: 'home' | 'config' | 'quiz' | 'results' | 'review'
  screen: 'home',

  // Dati di riferimento (caricati una volta, persistono tra sessioni)
  allQuestions: [],
  availableMaterie: [],
  isDataLoaded: false,

  // Sessione quiz
  sessionId: null,
  selectionMode: SELECTION_MODES.RANDOM,
  questions: [],
  answers: {},      // { [index]: { selectedOptionId, isVerified, isCorrect } }
  currentIndex: 0,

  // Tracking: domande già viste in questa sessione (previene chiamate inutili)
  seenQuestionIds: {},

  // Risultati (calcolati al termine)
  results: null,

  // Caricamento
  isLoading: false
};

// ─── Azioni ───
const ACTIONS = {
  GO_TO_CONFIG: 'GO_TO_CONFIG',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
  DATA_LOADED: 'DATA_LOADED',
  QUIZ_READY: 'QUIZ_READY',
  SELECT_ANSWER: 'SELECT_ANSWER',
  VERIFY_ANSWER: 'VERIFY_ANSWER',
  MARK_QUESTION_SEEN: 'MARK_QUESTION_SEEN',
  GO_NEXT: 'GO_NEXT',
  GO_PREV: 'GO_PREV',
  FINISH_QUIZ: 'FINISH_QUIZ',
  SHOW_REVIEW: 'SHOW_REVIEW',
  GO_HOME: 'GO_HOME'
};

// ─── Reducer ───
function quizReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GO_TO_CONFIG:
      return {
        ...state,
        screen: 'config',
        questions: [],
        answers: {},
        currentIndex: 0,
        seenQuestionIds: {},
        sessionId: null,
        selectionMode: SELECTION_MODES.RANDOM,
        results: null
      };

    case ACTIONS.START_LOADING:
      return { ...state, isLoading: true };

    case ACTIONS.STOP_LOADING:
      return { ...state, isLoading: false };

    case ACTIONS.DATA_LOADED:
      return {
        ...state,
        allQuestions: action.payload.questions,
        availableMaterie: action.payload.materie,
        isDataLoaded: true,
        isLoading: false
      };

    case ACTIONS.QUIZ_READY:
      return {
        ...state,
        screen: 'quiz',
        questions: action.payload.questions,
        answers: createEmptyAnswers(action.payload.questions.length),
        currentIndex: 0,
        seenQuestionIds: {},
        sessionId: action.payload.sessionId,
        selectionMode: action.payload.selectionMode,
        results: null,
        isLoading: false
      };

    case ACTIONS.SELECT_ANSWER: {
      const currentAnswer = state.answers[state.currentIndex];
      if (currentAnswer && currentAnswer.isVerified) return state;
      const newOptionId =
        currentAnswer?.selectedOptionId === action.payload.optionId
          ? null
          : action.payload.optionId;
      return {
        ...state,
        answers: {
          ...state.answers,
          [state.currentIndex]: {
            ...currentAnswer,
            selectedOptionId: newOptionId
          }
        }
      };
    }

    case ACTIONS.VERIFY_ANSWER: {
      const currentAnswer = state.answers[state.currentIndex];
      if (!currentAnswer || currentAnswer.isVerified || !currentAnswer.selectedOptionId) {
        return state;
      }
      const currentQuestion = state.questions[state.currentIndex];
      const selectedOption = currentQuestion.shuffledOptions.find(
        opt => opt.id === currentAnswer.selectedOptionId
      );
      const isCorrect = selectedOption ? selectedOption.isCorrect : false;
      return {
        ...state,
        answers: {
          ...state.answers,
          [state.currentIndex]: {
            ...currentAnswer,
            isVerified: true,
            isCorrect
          }
        }
      };
    }

    case ACTIONS.MARK_QUESTION_SEEN: {
      const questionId = action.payload.questionId;
      if (state.seenQuestionIds[questionId]) return state;
      return {
        ...state,
        seenQuestionIds: {
          ...state.seenQuestionIds,
          [questionId]: true
        }
      };
    }

    case ACTIONS.GO_NEXT: {
      const currentAnswer = state.answers[state.currentIndex];
      if (!currentAnswer || !currentAnswer.isVerified) return state;
      if (state.currentIndex >= state.questions.length - 1) return state;
      return { ...state, currentIndex: state.currentIndex + 1 };
    }

    case ACTIONS.GO_PREV:
      if (state.currentIndex <= 0) return state;
      return { ...state, currentIndex: state.currentIndex - 1 };

    case ACTIONS.FINISH_QUIZ: {
      const results = calculateResults(state.questions, state.answers);
      return {
        ...state,
        screen: 'results',
        results
      };
    }

    case ACTIONS.SHOW_REVIEW:
      return { ...state, screen: 'review' };

    case ACTIONS.GO_HOME:
      return {
        ...initialState,
        allQuestions: state.allQuestions,
        availableMaterie: state.availableMaterie,
        isDataLoaded: state.isDataLoaded
      };

    default:
      return state;
  }
}

// ─── Context ───
const QuizContext = createContext(null);

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // ── Tracking: registra domanda vista (numeroVolteProposta) ──
  // L'idempotenza è garantita a due livelli:
  // 1. seenQuestionIds nel reducer (evita chiamate inutili)
  // 2. recordQuestionShown nel service (sessionId + questionId unico)
  useEffect(() => {
    if (state.screen !== 'quiz') return;
    const currentQ = state.questions[state.currentIndex];
    if (!currentQ) return;
    if (state.seenQuestionIds[currentQ.id]) return;

    dispatch({ type: ACTIONS.MARK_QUESTION_SEEN, payload: { questionId: currentQ.id } });
    recordQuestionShown({
      sessionId: state.sessionId,
      questionId: currentQ.id
    }).catch((error) => {
      console.error('Errore nella registrazione della domanda mostrata:', error);
    });
  }, [state.screen, state.currentIndex, state.questions]);

  // ── Azioni ──

  const goToConfig = useCallback(async () => {
    dispatch({ type: ACTIONS.GO_TO_CONFIG });
    if (!state.isDataLoaded && !state.isLoading) {
      dispatch({ type: ACTIONS.START_LOADING });
      try {
        const questions = await getQuestions();
        const materieSet = new Set(questions.map(q => q.materia));
        const materie = Array.from(materieSet).sort();
        dispatch({ type: ACTIONS.DATA_LOADED, payload: { questions, materie } });
      } catch (error) {
        console.error('Errore nel caricamento dei dati:', error);
        dispatch({ type: ACTIONS.DATA_LOADED, payload: { questions: [], materie: [] } });
      }
    }
  }, [state.isDataLoaded, state.isLoading]);

  /**
   * Avvia una nuova esercitazione.
   * 1. Carica statistiche utente
   * 2. Filtra per materie → pool
   * 3. Applica la modalità di selezione
   * 4. Genera sessionId
   * 5. Prepara la sessione
   */
  const startQuiz = useCallback(async (count, selectedMaterie, selectionMode = SELECTION_MODES.RANDOM) => {
    dispatch({ type: ACTIONS.START_LOADING });

    try {
      // Carica le statistiche utente per le modalità non-casuali
      const userStats = await getUserStats();

      const questions = selectQuestions({
        questions: state.allQuestions,
        selectedSubjects: selectedMaterie,
        count,
        selectionMode,
        userStats
      });

      const sessionId = generateSessionId();
      await createQuizSession({
        sessionId,
        selectionMode,
        selectedMaterie,
        questionIds: questions.map((question) => String(question.id)),
        requestedCount: count
      });
      dispatch({ type: ACTIONS.QUIZ_READY, payload: { questions, sessionId, selectionMode } });
    } catch (error) {
      console.error('Errore nella preparazione del quiz:', error);
      dispatch({ type: ACTIONS.STOP_LOADING });
    }
  }, [state.allQuestions]);

  const selectAnswer = useCallback((optionId) => {
    dispatch({ type: ACTIONS.SELECT_ANSWER, payload: { optionId } });
  }, []);

  /**
   * Verifica la risposta corrente e aggiorna le statistiche.
   * - Corretta → recordAnswer con isCorrect: true
   * - Errata → recordAnswer con isCorrect: false
   * L'idempotenza è garantita da recordAnswer (sessionId + questionId).
   */
  const verifyAnswer = useCallback(async () => {
    const currentAns = state.answers[state.currentIndex];
    const currentQ = state.questions[state.currentIndex];
    if (!currentAns || currentAns.isVerified || !currentAns.selectedOptionId) return;

    // Calcola l'esito PRIMA del dispatch
    const selectedOpt = currentQ.shuffledOptions.find(
      opt => opt.id === currentAns.selectedOptionId
    );
    const isCorrect = selectedOpt ? selectedOpt.isCorrect : false;

    if (!selectedOpt) return;

    // Registra la risposta (idempotente: sessionId + questionId)
    await recordAnswer({
      sessionId: state.sessionId,
      questionId: currentQ.id,
      selectedText: selectedOpt.text
    });

    dispatch({ type: ACTIONS.VERIFY_ANSWER });
  }, [state.answers, state.currentIndex, state.questions, state.sessionId]);

  const goNext = useCallback(() => {
    dispatch({ type: ACTIONS.GO_NEXT });
  }, []);

  const goPrev = useCallback(() => {
    dispatch({ type: ACTIONS.GO_PREV });
  }, []);

  const finishQuiz = useCallback(async () => {
    try {
      if (state.sessionId) {
        await finishQuizSession({ sessionId: state.sessionId });
      }
    } catch (error) {
      console.error('Errore nella chiusura della sessione quiz:', error);
    } finally {
      dispatch({ type: ACTIONS.FINISH_QUIZ });
    }
  }, [state.sessionId]);

  const showReview = useCallback(() => {
    dispatch({ type: ACTIONS.SHOW_REVIEW });
  }, []);

  const goHome = useCallback(() => {
    dispatch({ type: ACTIONS.GO_HOME });
  }, []);

  // ── Valori derivati ──
  const currentQuestion = state.questions[state.currentIndex] || null;
  const currentAnswer = state.answers[state.currentIndex] || null;
  const isCurrentVerified = currentAnswer?.isVerified || false;
  const isFirstQuestion = state.currentIndex === 0;
  const isLastQuestion = state.currentIndex === state.questions.length - 1;

  const verifiedCount = Object.values(state.answers).filter(a => a.isVerified).length;
  const correctCount = Object.values(state.answers).filter(a => a.isVerified && a.isCorrect).length;
  const wrongCount = Object.values(state.answers).filter(a => a.isVerified && !a.isCorrect).length;
  const remainingCount = state.questions.length - verifiedCount;
  const allVerified = verifiedCount === state.questions.length && state.questions.length > 0;

  const value = {
    ...state,
    currentQuestion,
    currentAnswer,
    isCurrentVerified,
    isFirstQuestion,
    isLastQuestion,
    verifiedCount,
    correctCount,
    wrongCount,
    remainingCount,
    allVerified,
    goToConfig,
    startQuiz,
    selectAnswer,
    verifyAnswer,
    goNext,
    goPrev,
    finishQuiz,
    showReview,
    goHome
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz deve essere usato dentro un QuizProvider');
  }
  return context;
}
