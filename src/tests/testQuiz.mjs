import questionBank from '../data/questionBank.js';
import { prepareShuffledOptions } from '../utils/shuffle.js';
import {
  createEmptyAnswers,
  generateSessionId,
  selectHighestErrorQuestions,
  selectLeastPracticedQuestions,
  selectQuestions,
  selectRandomQuestions,
  SELECTION_MODE_LABELS,
  SELECTION_MODES
} from '../engine/quizEngine.js';
import { calculateResults } from '../engine/scoring.js';

let passed = 0;
let failed = 0;

function check(condition, message) {
  if (condition) {
    passed += 1;
    console.log(`OK  ${message}`);
    return;
  }

  failed += 1;
  console.error(`NO  ${message}`);
}

function section(title) {
  console.log(`\n=== ${title} ===`);
}

function makeMockQuestion(id, materia) {
  return {
    id,
    materia,
    domanda: `Domanda ${id}`,
    rispostaCorretta: `Corretta ${id}`,
    risposteErrate: [`Errata ${id}-1`, `Errata ${id}-2`, `Errata ${id}-3`]
  };
}

const expectedSubjectCounts = {
  'Comprensione verbale': 45,
  Logica: 46,
  Matematica: 96,
  Scienze: 65
};

const totalExpected = Object.values(expectedSubjectCounts).reduce((sum, value) => sum + value, 0);
const materie = [...new Set(questionBank.map((question) => question.materia))].sort();
const [primarySubject, secondarySubject] = materie;
const selectedSubjects = [primarySubject, secondarySubject];

section('Banca dati');
check(Array.isArray(questionBank), 'La banca dati è un array');
check(questionBank.length === totalExpected, `La banca dati contiene ${totalExpected} domande`);
check(
  materie.length === Object.keys(expectedSubjectCounts).length,
  `Le materie distinte sono ${Object.keys(expectedSubjectCounts).length}`
);
check(
  Object.entries(expectedSubjectCounts).every(([materia, count]) => (
    questionBank.filter((question) => question.materia === materia).length === count
  )),
  'Ogni materia mantiene il numero di quesiti atteso'
);

section('Modalità di selezione');
check(SELECTION_MODE_LABELS[SELECTION_MODES.RANDOM] === 'Casuale', 'Label RANDOM coerente');
check(SELECTION_MODE_LABELS[SELECTION_MODES.HIGHEST_ERROR_RATE] === 'Maggiori errori', 'Label HIGHEST_ERROR_RATE coerente');
check(SELECTION_MODE_LABELS[SELECTION_MODES.LEAST_PRACTICED] === 'Meno svolte', 'Label LEAST_PRACTICED coerente');

const randomSelection = selectRandomQuestions(questionBank, 10);
check(randomSelection.length === 10, 'La selezione casuale restituisce il numero richiesto');
check(new Set(randomSelection.map((question) => question.id)).size === 10, 'La selezione casuale non contiene duplicati');

const mockPool = [
  makeMockQuestion('A', 'M1'),
  makeMockQuestion('B', 'M1'),
  makeMockQuestion('C', 'M1'),
  makeMockQuestion('D', 'M1')
];

const errorStats = {
  A: { numeroRisposteCorrette: 1, numeroRisposteErrate: 4 },
  B: { numeroRisposteCorrette: 2, numeroRisposteErrate: 2 },
  C: { numeroRisposteCorrette: 3, numeroRisposteErrate: 0 }
};

const highestErrors = selectHighestErrorQuestions(mockPool, 4, errorStats);
check(highestErrors[0].id === 'A', 'Le domande con più errori vengono prioritarizzate');
check(highestErrors.at(-1).id === 'D', 'Le domande mai svolte completano la selezione se necessario');

const leastPracticedStats = {
  A: { numeroRisposteCorrette: 5, numeroRisposteErrate: 5 },
  B: { numeroRisposteCorrette: 1, numeroRisposteErrate: 0 },
  C: { numeroRisposteCorrette: 2, numeroRisposteErrate: 1 }
};

const leastPracticed = selectLeastPracticedQuestions(mockPool, 4, leastPracticedStats);
check(leastPracticed[0].id === 'D', 'Le domande mai svolte hanno priorità nella modalità meno svolte');
check(leastPracticed[1].id === 'B', 'Tra le svolte, passa prima chi ha meno tentativi');

section('Filtro per materia e opzioni');
for (const mode of Object.values(SELECTION_MODES)) {
  const selection = selectQuestions({
    questions: questionBank,
    selectedSubjects,
    count: 12,
    selectionMode: mode,
    userStats: {}
  });

  check(selection.length === 12, `${mode}: restituisce 12 domande`);
  check(
    selection.every((question) => selectedSubjects.includes(question.materia)),
    `${mode}: rispetta il filtro per materia`
  );
  check(
    selection.every((question) => Array.isArray(question.shuffledOptions) && question.shuffledOptions.length >= 4),
    `${mode}: prepara sempre le opzioni randomizzate`
  );
}

const preparedOptions = prepareShuffledOptions(questionBank[0]);
check(preparedOptions.filter((option) => option.isCorrect).length === 1, 'Ogni domanda ha una sola risposta corretta');

section('Stato risposte e punteggio');
const emptyAnswers = createEmptyAnswers(3);
check(Object.keys(emptyAnswers).length === 3, 'Viene creato lo stato iniziale per tutte le domande');
check(emptyAnswers[0].selectedOptionId === null, 'Le risposte iniziali partono vuote');
check(emptyAnswers[0].isVerified === false, 'Le risposte iniziali non sono verificate');

const quizQuestions = selectQuestions({
  questions: questionBank,
  selectedSubjects: materie,
  count: 4,
  selectionMode: SELECTION_MODES.RANDOM,
  userStats: {}
});
const quizAnswers = createEmptyAnswers(4);
const firstCorrect = quizQuestions[0].shuffledOptions.find((option) => option.isCorrect);
const secondWrong = quizQuestions[1].shuffledOptions.find((option) => !option.isCorrect);

quizAnswers[0] = { selectedOptionId: firstCorrect.id, isVerified: true, isCorrect: true };
quizAnswers[1] = { selectedOptionId: secondWrong.id, isVerified: true, isCorrect: false };

const results = calculateResults(quizQuestions, quizAnswers);
check(results.total === 4, 'Il riepilogo mantiene il totale delle domande');
check(results.correct === 1, 'Il conteggio delle corrette è coerente');
check(results.wrong === 1, 'Il conteggio delle errate è coerente');
check(results.unanswered === 2, 'Le domande non verificate restano non risposte');

section('Session IDs');
const generatedIds = new Set(Array.from({ length: 100 }, () => generateSessionId()));
check(generatedIds.size === 100, 'I session ID generati sono univoci in un campione di 100');

console.log(`\nRisultato: ${passed} test passati, ${failed} falliti.`);

if (failed > 0) {
  process.exit(1);
}
