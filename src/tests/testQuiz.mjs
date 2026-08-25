import questionBank from '../data/questionBank.js';
import { getQuestions, getAllQuestions, getMaterie, getQuestionsByMaterie, getQuestionById } from '../data/dataService.js';
import { getRawQuestionById, QUESTION_CATALOG_SUMMARY } from '../data/questionCatalog.js';
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

// ─── 1. BANCA DATI FISICA (392 RECORD) ───
section('1. Banca Dati Fisica (392 Record)');
check(Array.isArray(questionBank), 'questionBank è un array');
check(questionBank.length === 392, `questionBank contiene esattamente 392 record fisici (trovati: ${questionBank.length})`);

const allAllQuestions = await getAllQuestions();
check(allAllQuestions.length === 392, `getAllQuestions() restituisce tutti i 392 record fisici (trovati: ${allAllQuestions.length})`);

const allIds = questionBank.map((q) => q.id);
const uniqueIds = new Set(allIds);
check(uniqueIds.size === 392, `Tutti i 392 ID sono univoci (trovati: ${uniqueIds.size})`);
check(Math.min(...allIds) === 1, `ID minimo = 1 (trovato: ${Math.min(...allIds)})`);
check(Math.max(...allIds) === 397, `ID massimo = 397 (trovato: ${Math.max(...allIds)})`);

// Preservazione buchi storici
const historicalHoles = [2, 18, 25, 78, 202];
const preservedHoles = historicalHoles.every((holeId) => !uniqueIds.has(holeId));
check(preservedHoles, 'Assenza tassativa degli ID storici non riutilizzabili (2, 18, 25, 78, 202)');

// ─── 2A. CENSIMENTO LOTTO M1 (ID 323–347) ───
section('2A. Censimento e Validazione Lotto M1 (ID 323–347)');
const m1Questions = questionBank.filter((q) => q.id >= 323 && q.id <= 347);
check(m1Questions.length === 25, `Lotto M1: esattamente 25 quesiti nel range ID 323–347 (trovati: ${m1Questions.length})`);

const m1AllMath = m1Questions.every((q) => q.materia === 'Matematica');
check(m1AllMath, 'Tutti i 25 quesiti di M1 appartengono alla materia Matematica');

const m1OptionsCheck = m1Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(m1OptionsCheck, 'Tutti i 25 quesiti di M1 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const m1StatsZeroed = m1Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(m1StatsZeroed, 'Tutti i 25 quesiti di M1 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const m1FonteCheck = m1Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto M1 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(m1FonteCheck, 'Tutti i 25 quesiti di M1 indicano chiaramente "Lotto M1 del progetto" nella fonte senza attribuzioni esterne');

const q334 = questionBank.find((q) => q.id === 334);
check(
  Boolean(q334 && q334.domanda.includes('x \\ne 0') && q334.domanda.includes('x \\ne -2')),
  'Quesito M1-12 (ID 334) contiene il dominio esplicito x ≠ 0 e x ≠ -2'
);

// ─── 2B. CENSIMENTO LOTTO M2 (ID 348–372) ───
section('2B. Censimento e Validazione Lotto M2 (ID 348–372)');
const m2Questions = questionBank.filter((q) => q.id >= 348 && q.id <= 372);
check(m2Questions.length === 25, `Lotto M2: esattamente 25 quesiti nel range ID 348–372 (trovati: ${m2Questions.length})`);

const m2AllMath = m2Questions.every((q) => q.materia === 'Matematica');
check(m2AllMath, 'Tutti i 25 quesiti di M2 appartengono alla materia Matematica');

const m2OptionsCheck = m2Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(m2OptionsCheck, 'Tutti i 25 quesiti di M2 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const m2StatsZeroed = m2Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(m2StatsZeroed, 'Tutti i 25 quesiti di M2 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const m2FonteCheck = m2Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto M2 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(m2FonteCheck, 'Tutti i 25 quesiti di M2 indicano chiaramente "Lotto M2 del progetto" nella fonte senza attribuzioni esterne');

const m2NoLegacyFlag = m2Questions.every((q) => q.excludedFromTolcPool !== true);
check(m2NoLegacyFlag, 'Nessun quesito di M2 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// ─── 2C. CENSIMENTO LOTTO M3 (ID 373–397) ───
section('2C. Censimento e Validazione Lotto M3 (ID 373–397)');
const m3Questions = questionBank.filter((q) => q.id >= 373 && q.id <= 397);
check(m3Questions.length === 25, `Lotto M3: esattamente 25 quesiti nel range ID 373–397 (trovati: ${m3Questions.length})`);

const m3AllMath = m3Questions.every((q) => q.materia === 'Matematica');
check(m3AllMath, 'Tutti i 25 quesiti di M3 appartengono alla materia Matematica');

const m3OptionsCheck = m3Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(m3OptionsCheck, 'Tutti i 25 quesiti di M3 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const m3StatsZeroed = m3Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(m3StatsZeroed, 'Tutti i 25 quesiti di M3 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const m3FonteCheck = m3Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto M3 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(m3FonteCheck, 'Tutti i 25 quesiti di M3 indicano chiaramente "Lotto M3 del progetto" nella fonte senza attribuzioni esterne');

const m3NoLegacyFlag = m3Questions.every((q) => q.excludedFromTolcPool !== true);
check(m3NoLegacyFlag, 'Nessun quesito di M3 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

const q396 = questionBank.find((q) => q.id === 396);
check(
  Boolean(q396 && q396.domanda.includes('con $k \\in \\mathbb{Z}$')),
  'Quesito M3-24 (ID 396) contiene la quantificazione esplicita "con k in Z"'
);

// ─── 3. ISOLAMENTO 35 RECORD LEGACY ED ESCLUSIONE ───
section('3. Isolamento 35 Record Legacy (excludedFromTolcPool: true)');
const legacyRecords = questionBank.filter((q) => q.excludedFromTolcPool === true);
check(legacyRecords.length === 35, `Esattamente 35 record fisici possiedono excludedFromTolcPool: true (trovati: ${legacyRecords.length})`);

const nonLegacyWithFalse = questionBank.filter((q) => q.excludedFromTolcPool === false);
check(nonLegacyWithFalse.length === 0, 'Nessun record possiede excludedFromTolcPool: false (flag omesso per i record attivi)');

const expectedLegacyIds = [31, 69, 76, 85, ...Array.from({ length: 30 }, (_, i) => 258 + i), 315];
const allExpectedLegacyFlagged = expectedLegacyIds.every((id) => (
  questionBank.find((q) => q.id === id)?.excludedFromTolcPool === true
));
check(allExpectedLegacyFlagged, 'Tutti i 35 ID legacy previsti (4 duplicati, 30 inglesi, ID 315) sono contrassegnati');

// ─── 4. TEST DEDICATO ID 315 (ESCLUSIONE E RECUPERABILITÀ) ───
section('4. Test Dedicato ID 315 (Esclusione da Estrazioni e Piena Recuperabilità)');
const activeQuestionsFromService = await getQuestions();
const id315InActive = activeQuestionsFromService.some((q) => q.id === 315);
check(!id315InActive, 'ID 315 è ESCLUSO da getQuestions()');

// Verifica non estraibilità nelle 3 modalità con count sufficiente a coprire l'intero pool di Comprensione verbale
const modesToTest = [
  { mode: SELECTION_MODES.RANDOM, name: 'RANDOM' },
  { mode: SELECTION_MODES.HIGHEST_ERROR_RATE, name: 'HIGHEST_ERROR_RATE' },
  { mode: SELECTION_MODES.LEAST_PRACTICED, name: 'LEAST_PRACTICED' }
];

const mockStatsWith315 = {
  315: { numeroRisposteCorrette: 0, numeroRisposteErrate: 100 },
  '315': { numeroRisposteCorrette: 0, numeroRisposteErrate: 100 }
};

for (const { mode, name } of modesToTest) {
  const selection = selectQuestions({
    questions: questionBank,
    selectedSubjects: ['Comprensione verbale'],
    count: 100, // supera il totale di 49 quesiti attivi di Comprensione verbale
    selectionMode: mode,
    userStats: mockStatsWith315
  });

  check(!selection.some((q) => q.id === 315), `ID 315 non viene mai estratto in modalità ${name} su Comprensione verbale`);
  check(selection.length === 49, `Selezione ${name} su Comprensione verbale restituisce tutti e soli i 49 quesiti attivi`);
}

const id315FromCatalog = await getQuestionById(315);
check(Boolean(id315FromCatalog && id315FromCatalog.id === 315), 'ID 315 è pienamente recuperabile tramite getQuestionById(315)');
check(typeof id315FromCatalog?.brano === 'string' && id315FromCatalog.brano.length > 500, 'ID 315 recuperato contiene il brano integrale');

const id315Raw = getRawQuestionById(315);
check(Boolean(id315Raw && id315Raw.id === 315), 'ID 315 è recuperabile tramite getRawQuestionById(315)');

// ─── 5. POOL ATTIVO 357 QUESITI E RIPARTIZIONE PER MATERIA ───
section('5. Pool Attivo 357 Quesiti e Ripartizione per Materia');
check(activeQuestionsFromService.length === 357, `getQuestions() restituisce esattamente 357 quesiti attivi (trovati: ${activeQuestionsFromService.length})`);

const activeSubjects = {
  Matematica: 192,
  Logica: 48,
  Scienze: 68,
  'Comprensione verbale': 49
};

const activeDistribution = {};
activeQuestionsFromService.forEach((q) => {
  activeDistribution[q.materia] = (activeDistribution[q.materia] || 0) + 1;
});

check(activeDistribution['Matematica'] === 192, `Matematica attiva: 192 (trovati: ${activeDistribution['Matematica']})`);
check(activeDistribution['Logica'] === 48, `Logica attiva: 48 (trovati: ${activeDistribution['Logica']})`);
check(activeDistribution['Scienze'] === 68, `Scienze attiva: 68 (trovati: ${activeDistribution['Scienze']})`);
check(activeDistribution['Comprensione verbale'] === 49, `Comprensione verbale attiva: 49 (trovati: ${activeDistribution['Comprensione verbale']})`);

const totalActiveSum = Object.values(activeDistribution).reduce((sum, v) => sum + v, 0);
check(totalActiveSum === 357, `Somma per materia pool attivo = 357 (192 + 48 + 68 + 49 = ${totalActiveSum})`);

const serviceMaterie = (await getMaterie()).sort();
check(serviceMaterie.length === 4, `getMaterie() restituisce esattamente 4 materie attive (${serviceMaterie.join(', ')})`);

for (const [mat, expectedCount] of Object.entries(activeSubjects)) {
  const filtered = await getQuestionsByMaterie([mat]);
  check(filtered.length === expectedCount, `getQuestionsByMaterie(['${mat}']) restituisce ${expectedCount} quesiti`);
  check(filtered.every((q) => q.materia === mat), `Tutti i quesiti filtrati per '${mat}' appartengono a '${mat}'`);
}

// ─── 6. MODALITÀ DI SELEZIONE E ORDINAMENTO SU POOL ATTIVO ───
section('6. Modalità di Selezione su Pool Attivo');
check(SELECTION_MODE_LABELS[SELECTION_MODES.RANDOM] === 'Casuale', 'Label RANDOM = Casuale');
check(SELECTION_MODE_LABELS[SELECTION_MODES.HIGHEST_ERROR_RATE] === 'Maggiori errori', 'Label HIGHEST_ERROR_RATE = Maggiori errori');
check(SELECTION_MODE_LABELS[SELECTION_MODES.LEAST_PRACTICED] === 'Meno svolte', 'Label LEAST_PRACTICED = Meno svolte');

// Test 6A: Casuale
const randomSelection = selectRandomQuestions(activeQuestionsFromService, 10);
check(randomSelection.length === 10, 'Selezione casuale: estrae 10 quesiti richiesti');
check(new Set(randomSelection.map((q) => q.id)).size === 10, 'Selezione casuale: nessun duplicato');
check(randomSelection.every((q) => !q.excludedFromTolcPool), 'Selezione casuale: nessun record legacy estratto');

// Test 6B: Maggiori errori
const mockPool = [
  makeMockQuestion('A', 'Matematica'),
  makeMockQuestion('B', 'Matematica'),
  makeMockQuestion('C', 'Matematica'),
  makeMockQuestion('D', 'Matematica')
];
const errorStats = {
  A: { numeroRisposteCorrette: 1, numeroRisposteErrate: 4 }, // 80% errore
  B: { numeroRisposteCorrette: 2, numeroRisposteErrate: 2 }, // 50% errore
  C: { numeroRisposteCorrette: 3, numeroRisposteErrate: 0 }  // 0% errore
};
const highestErrors = selectHighestErrorQuestions(mockPool, 4, errorStats);
check(highestErrors[0].id === 'A', 'Maggiori errori: A (80% errore) priorità 1');
check(highestErrors[1].id === 'B', 'Maggiori errori: B (50% errore) priorità 2');
check(highestErrors[2].id === 'C', 'Maggiori errori: C (0% errore) priorità 3');
check(highestErrors[3].id === 'D', 'Maggiori errori: D (mai svolta) completa la selezione');

// Test 6C: Meno svolte
const leastPracticedStats = {
  A: { numeroRisposteCorrette: 5, numeroRisposteErrate: 5 }, // 10 svolgimenti
  B: { numeroRisposteCorrette: 1, numeroRisposteErrate: 0 }, // 1 svolgimento
  C: { numeroRisposteCorrette: 2, numeroRisposteErrate: 1 }  // 3 svolgimenti
};
const leastPracticed = selectLeastPracticedQuestions(mockPool, 4, leastPracticedStats);
check(leastPracticed[0].id === 'D', 'Meno svolte: D (0 svolgimenti) priorità 1');
check(leastPracticed[1].id === 'B', 'Meno svolte: B (1 svolgimento) priorità 2');
check(leastPracticed[2].id === 'C', 'Meno svolte: C (3 svolgimenti) priorità 3');
check(leastPracticed[3].id === 'A', 'Meno svolte: A (10 svolgimenti) priorità 4');

// Test 6D: selectQuestions con filtro multi-materia
for (const mode of Object.values(SELECTION_MODES)) {
  const selection = selectQuestions({
    questions: questionBank,
    selectedSubjects: ['Matematica', 'Logica'],
    count: 20,
    selectionMode: mode,
    userStats: {}
  });

  check(selection.length === 20, `selectQuestions [${mode}]: restituisce 20 quesiti`);
  check(
    selection.every((q) => ['Matematica', 'Logica'].includes(q.materia)),
    `selectQuestions [${mode}]: rispetta il filtro per materia`
  );
  check(
    selection.every((q) => !q.excludedFromTolcPool),
    `selectQuestions [${mode}]: esclude difensivamente tutti i record legacy`
  );
  check(
    selection.every((q) => Array.isArray(q.shuffledOptions) && q.shuffledOptions.length >= 4),
    `selectQuestions [${mode}]: opzioni randomizzate presenti`
  );
}

// ─── 7. STATO RISPOSTE, SCORING E SESSIONI ───
section('7. Stato Risposte, Calcolo Risultati e Session IDs');
const emptyAnswers = createEmptyAnswers(3);
check(Object.keys(emptyAnswers).length === 3, 'createEmptyAnswers crea lo stato per tutte le domande');
check(emptyAnswers[0].selectedOptionId === null, 'Risposta iniziale: selectedOptionId = null');
check(emptyAnswers[0].isVerified === false, 'Risposta iniziale: isVerified = false');

const quizQuestions = selectQuestions({
  questions: questionBank,
  selectedSubjects: serviceMaterie,
  count: 4,
  selectionMode: SELECTION_MODES.RANDOM,
  userStats: {}
});
const quizAnswers = createEmptyAnswers(4);
const firstCorrect = quizQuestions[0].shuffledOptions.find((opt) => opt.isCorrect);
const secondWrong = quizQuestions[1].shuffledOptions.find((opt) => !opt.isCorrect);

quizAnswers[0] = { selectedOptionId: firstCorrect.id, isVerified: true, isCorrect: true };
quizAnswers[1] = { selectedOptionId: secondWrong.id, isVerified: true, isCorrect: false };

const results = calculateResults(quizQuestions, quizAnswers);
check(results.total === 4, 'calculateResults: totale 4 domande');
check(results.correct === 1, 'calculateResults: 1 risposta corretta');
check(results.wrong === 1, 'calculateResults: 1 risposta errata');
check(results.unanswered === 2, 'calculateResults: 2 non risposte');

const generatedIds = new Set(Array.from({ length: 100 }, () => generateSessionId()));
check(generatedIds.size === 100, 'generateSessionId produce ID univoci su 100 chiamate');

// ─── 8. EQUAZIONE DI BILANCIO FINALE ───
section('8. Equazione di Bilancio Finale');
const baseCount = 317;
const m1Count = 25;
const m2Count = 25;
const m3Count = 25;
const physicalTotal = questionBank.length;
const legacyCount = questionBank.filter((q) => q.excludedFromTolcPool === true).length;
const activeTotal = activeQuestionsFromService.length;

check(baseCount + m1Count + m2Count + m3Count === physicalTotal, `Uguaglianza fisica verificata: ${baseCount} (base) + ${m1Count} (M1) + ${m2Count} (M2) + ${m3Count} (M3) = ${physicalTotal} (fisici)`);
check(physicalTotal - legacyCount === activeTotal, `Uguaglianza attiva verificata: ${physicalTotal} (fisici) - ${legacyCount} (legacy) = ${activeTotal} (attivi)`);

console.log(`\nRisultato testQuiz.mjs: ${passed} test passati, ${failed} falliti.`);

if (failed > 0) {
  process.exit(1);
}
