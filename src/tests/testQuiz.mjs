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

// ─── 1. BANCA DATI FISICA (682 RECORD) ───
section('1. Banca Dati Fisica (682 Record)');
check(Array.isArray(questionBank), 'questionBank è un array');
check(questionBank.length === 682, `questionBank contiene esattamente 682 record fisici (trovati: ${questionBank.length})`);

const allAllQuestions = await getAllQuestions();
check(allAllQuestions.length === 682, `getAllQuestions() restituisce tutti i 682 record fisici (trovati: ${allAllQuestions.length})`);

const allIds = questionBank.map((q) => q.id);
const uniqueIds = new Set(allIds);
check(uniqueIds.size === 682, `Tutti i 682 ID sono univoci (trovati: ${uniqueIds.size})`);
check(Math.min(...allIds) === 1, `ID minimo = 1 (trovato: ${Math.min(...allIds)})`);
check(Math.max(...allIds) === 687, `ID massimo = 687 (trovato: ${Math.max(...allIds)})`);

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

// ─── 2D. CENSIMENTO LOTTO M4 (ID 398–422) ───
section('2D. Censimento e Validazione Lotto M4 (ID 398–422)');
const m4Questions = questionBank.filter((q) => q.id >= 398 && q.id <= 422);
check(m4Questions.length === 25, `Lotto M4: esattamente 25 quesiti nel range ID 398–422 (trovati: ${m4Questions.length})`);

const m4AllMath = m4Questions.every((q) => q.materia === 'Matematica');
check(m4AllMath, 'Tutti i 25 quesiti di M4 appartengono alla materia Matematica');

const m4OptionsCheck = m4Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(m4OptionsCheck, 'Tutti i 25 quesiti di M4 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const m4StatsZeroed = m4Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(m4StatsZeroed, 'Tutti i 25 quesiti di M4 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const m4FonteCheck = m4Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto M4 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(m4FonteCheck, 'Tutti i 25 quesiti di M4 indicano chiaramente "Lotto M4 del progetto" nella fonte senza attribuzioni esterne');

const m4NoLegacyFlag = m4Questions.every((q) => q.excludedFromTolcPool !== true);
check(m4NoLegacyFlag, 'Nessun quesito di M4 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// Regression checks su casi rifiniti M4
const q398 = questionBank.find((q) => q.id === 398);
check(
  Boolean(q398 && q398.domanda.includes('angolo esterno misura $45^\\circ$') && q398.rispostaCorretta === '8'),
  'Quesito M4-01 (ID 398) contiene la versione rifinita sull’angolo esterno da 45° con risposta 8'
);

const q404 = questionBank.find((q) => q.id === 404);
check(
  Boolean(q404 && q404.domanda.includes('semicircolo') && q404.rispostaCorretta === '$32 + 8\\pi\\text{ cm}^2$'),
  'Quesito M4-07 (ID 404) contiene la figura composta rettangolo-semicircolo con risposta corretta $32 + 8\\pi\\text{ cm}^2$'
);

const q406 = questionBank.find((q) => q.id === 406);
check(
  Boolean(q406 && q406.domanda.includes('rapporto tra la nuova superficie totale e quella iniziale') && q406.rispostaCorretta === '9'),
  'Quesito M4-09 (ID 406) contiene la formulazione adimensionale sul rapporto delle superfici con risposta 9'
);

const q412 = questionBank.find((q) => q.id === 412);
check(
  Boolean(q412 && q412.risposteErrate.includes('$400\\text{ cm}^2$') && !q412.risposteErrate.some(opt => opt.includes('cm}^3'))),
  'Quesito M4-15 (ID 412) contiene il distrattore omogeneo $400\\text{ cm}^2$ (senso volume scambiato per area)'
);

const q416 = questionBank.find((q) => q.id === 416);
check(
  Boolean(q416 && q416.domanda.includes('$36\\text{ cm}$') && q416.domanda.includes('$10\\text{ cm}$') && q416.rispostaCorretta === '$60\\text{ cm}^2$'),
  'Quesito M4-19 (ID 416) contiene la configurazione distinta perimetro 36 cm, base 10 cm con area $60\\text{ cm}^2$'
);

const q420 = questionBank.find((q) => q.id === 420);
check(
  Boolean(q420 && !q420.domanda.endsWith('?"') && q420.risposteErrate.includes('$5\\text{ cm}$')),
  'Quesito M4-23 (ID 420) ha testo pulito senza virgolette spurie e include il distrattore $5\\text{ cm}$'
);

const q421 = questionBank.find((q) => q.id === 421);
check(
  Boolean(q421 && q421.risposteErrate.includes('$24\\text{ cm}$') && q421.risposteErrate.includes('$8\\text{ cm}$')),
  'Quesito M4-24 (ID 421) include i quattro distrattori geometrici approvati [7, 4, 24, 8]'
);

const q422 = questionBank.find((q) => q.id === 422);
check(
  Boolean(q422 && q422.rispostaCorretta === '$1250\\text{ cm}^2$'),
  'Quesito M4-25 (ID 422) contiene la superficie totale esatta $1250\\text{ cm}^2$'
);

// ─── 2E. CENSIMENTO LOTTO M5 (ID 423–455) ───
section('2E. Censimento e Validazione Lotto M5 (ID 423–455)');
const m5Questions = questionBank.filter((q) => q.id >= 423 && q.id <= 455);
check(m5Questions.length === 33, `Lotto M5: esattamente 33 quesiti nel range ID 423–455 (trovati: ${m5Questions.length})`);

const m5AllMath = m5Questions.every((q) => q.materia === 'Matematica');
check(m5AllMath, 'Tutti i 33 quesiti di M5 appartengono alla materia Matematica');

const m5OptionsCheck = m5Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(m5OptionsCheck, 'Tutti i 33 quesiti di M5 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const m5StatsZeroed = m5Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(m5StatsZeroed, 'Tutti i 33 quesiti di M5 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const m5FonteCheck = m5Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto M5 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(m5FonteCheck, 'Tutti i 33 quesiti di M5 indicano chiaramente "Lotto M5 del progetto" nella fonte senza attribuzioni esterne');

const m5NoLegacyFlag = m5Questions.every((q) => q.excludedFromTolcPool !== true);
check(m5NoLegacyFlag, 'Nessun quesito di M5 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// Regression checks specifici per casi rifiniti M5
const q424 = questionBank.find((q) => q.id === 424);
check(
  Boolean(q424 && q424.domanda.includes('2^{30}') && q424.domanda.includes('3^{20}') && q424.domanda.includes('5^{10}') && q424.rispostaCorretta === '$C < A < B$'),
  'Quesito M5-02 (ID 424) contiene la formulazione potenze 2^30, 3^20, 5^10 con risposta corretta $C < A < B$'
);

const q430 = questionBank.find((q) => q.id === 430);
check(
  Boolean(q430 && q430.domanda.includes('3^{x+1}') && q430.rispostaCorretta === '$x = 3$'),
  'Quesito M5-08 (ID 430) contiene equazione esponenziale composta con risposta corretta $x = 3$'
);

const q431 = questionBank.find((q) => q.id === 431);
check(
  Boolean(q431 && q431.rispostaCorretta === '$\\frac{3}{2}$' && q431.risposteErrate.includes('$\\frac{15}{2}$')),
  'Quesito M5-09 (ID 431) contiene risposta corretta $\\frac{3}{2}$ e distrattore $\\frac{15}{2}$'
);

const q438 = questionBank.find((q) => q.id === 438);
check(
  Boolean(q438 && q438.domanda.includes('(\\log_3 x)^2') && q438.rispostaCorretta === '$12$'),
  'Quesito M5-16 (ID 438) contiene equazione logaritmica quadratica con somma soluzioni $12$'
);

const q443 = questionBank.find((q) => q.id === 443);
check(
  Boolean(q443 && q443.rispostaCorretta === '$\\frac{1}{130}$' && q443.risposteErrate.includes('$\\frac{1}{100}$') && q443.risposteErrate.includes('$\\frac{1}{10}$') && q443.risposteErrate.includes('$\\frac{1}{13}$') && q443.risposteErrate.includes('$\\frac{1}{65}$')),
  'Quesito M5-21 (ID 443) contiene risposta $\\frac{1}{130}$ e i quattro distrattori approvati [1/100, 1/10, 1/13, 1/65]'
);

const q444 = questionBank.find((q) => q.id === 444);
check(
  Boolean(q444 && q444.risposteErrate.includes('$\\frac{5}{6}$') && !q444.risposteErrate.includes('$\\frac{5}{12}$')),
  'Quesito M5-22 (ID 444) include il distrattore $\\frac{5}{6}$ e non $\\frac{5}{12}$'
);

const q447 = questionBank.find((q) => q.id === 447);
check(
  Boolean(q447 && q447.domanda.includes('punteggi ottenuti sono diversi tra loro') && q447.rispostaCorretta === '$\\frac{2}{15}$'),
  'Quesito M5-25 (ID 447) contiene la probabilità condizionata su dadi con risposta $\\frac{2}{15}$'
);

const q451 = questionBank.find((q) => q.id === 451);
check(
  Boolean(q451 && q451.rispostaCorretta === '$60$' && q451.risposteErrate.includes('$20$') && !q451.risposteErrate.includes('$30$')),
  'Quesito M5-29 (ID 451) contiene risposta $60$, distrattore $20$ e non $30$'
);

const q453 = questionBank.find((q) => q.id === 453);
check(
  Boolean(q453 && q453.rispostaCorretta === '$120$' && q453.risposteErrate.includes('$240$') && q453.risposteErrate.includes('$720$') && q453.risposteErrate.includes('$26$') && q453.risposteErrate.includes('$252$')),
  'Quesito M5-31 (ID 453) contiene risposta $120$ e i distrattori approvati [240, 720, 26, 252]'
);

// ─── 2F. CENSIMENTO LOTTO S1 (ID 456–490) ───
section('2F. Censimento e Validazione Lotto S1 (ID 456–490)');
const s1Questions = questionBank.filter((q) => q.id >= 456 && q.id <= 490);
check(s1Questions.length === 35, `Lotto S1: esattamente 35 quesiti nel range ID 456–490 (trovati: ${s1Questions.length})`);

const s1AllScience = s1Questions.every((q) => q.materia === 'Scienze');
check(s1AllScience, 'Tutti i 35 quesiti di S1 appartengono alla materia Scienze');

const s1OptionsCheck = s1Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(s1OptionsCheck, 'Tutti i 35 quesiti di S1 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const s1StatsZeroed = s1Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(s1StatsZeroed, 'Tutti i 35 quesiti di S1 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const s1FonteCheck = s1Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto S1 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(s1FonteCheck, 'Tutti i 35 quesiti di S1 indicano chiaramente "Lotto S1 del progetto" nella fonte senza attribuzioni esterne');

const s1NoLegacyFlag = s1Questions.every((q) => q.excludedFromTolcPool !== true);
check(s1NoLegacyFlag, 'Nessun quesito di S1 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// Regression checks specifici per casi rifiniti S1
const q459 = questionBank.find((q) => q.id === 459);
check(
  Boolean(q459 && q459.domanda.includes('60^\\circ') && q459.rispostaCorretta === '$100\\text{ J}$'),
  'Quesito S1-04 (ID 459) contiene lavoro forza inclinata con risposta corretta $100\\text{ J}$'
);

const q471 = questionBank.find((q) => q.id === 471);
check(
  Boolean(q471 && q471.domanda.includes('macchina di Atwood') && q471.rispostaCorretta === '$2\\text{ m/s}^2$'),
  'Quesito S1-16 (ID 471) contiene macchina di Atwood con risposta corretta $2\\text{ m/s}^2$'
);

const q473 = questionBank.find((q) => q.id === 473);
check(
  Boolean(q473 && q473.rispostaCorretta === '$180\\text{ kJ}$'),
  'Quesito S1-18 (ID 473) contiene variazione energia cinetica quadratica con risposta $180\\text{ kJ}$'
);

const q478 = questionBank.find((q) => q.id === 478);
check(
  Boolean(q478 && q478.domanda.includes('energia termica dissipata') && q478.rispostaCorretta === '$102\\text{ J}$'),
  'Quesito S1-23 (ID 478) contiene versione sostitutiva dissipazione energetica con risposta $102\\text{ J}$'
);

const q481 = questionBank.find((q) => q.id === 481);
check(
  Boolean(q481 && q481.rispostaCorretta === '$2\\text{ m/s}$' && q481.risposteErrate.includes('$6\\text{ m/s}$')),
  'Quesito S1-26 (ID 481) contiene urto perfettamente anelastico con risposta $2\\text{ m/s}$ e include distrattore $6\\text{ m/s}$'
);

const q486 = questionBank.find((q) => q.id === 486);
check(
  Boolean(q486 && q486.domanda.includes('vincolato al centro di una guida circolare') && q486.rispostaCorretta === '$16\\text{ N}$'),
  'Quesito S1-31 (ID 486) contiene fune vincolata al centro con risposta corretta $16\\text{ N}$'
);

const q487 = questionBank.find((q) => q.id === 487);
check(
  Boolean(q487 && q487.domanda.includes('M_P = 2 M_T') && q487.rispostaCorretta === '$5\\text{ m/s}^2$'),
  'Quesito S1-32 (ID 487) contiene versione planetaria 2M_T, 2R_T con risposta corretta $5\\text{ m/s}^2$'
);

const q490 = questionBank.find((q) => q.id === 490);
check(
  Boolean(q490 && q490.domanda.includes('trave omogenea') && q490.rispostaCorretta === '$200\\text{ N}$' && q490.risposteErrate.includes('$\\frac{200}{\\sqrt{3}}\\text{ N}$') && q490.risposteErrate.includes('$\\frac{400}{\\sqrt{3}}\\text{ N}$')),
  'Quesito S1-35 (ID 490) contiene trave omogenea e tirante a 30° con risposta $200\\text{ N}$ e distrattori corretti'
);

// ─── 2G. CENSIMENTO LOTTO S2 (ID 491–525) ───
section('2G. Censimento e Validazione Lotto S2 (ID 491–525)');
const s2Questions = questionBank.filter((q) => q.id >= 491 && q.id <= 525);
check(s2Questions.length === 35, `Lotto S2: esattamente 35 quesiti nel range ID 491–525 (trovati: ${s2Questions.length})`);

const s2AllScience = s2Questions.every((q) => q.materia === 'Scienze');
check(s2AllScience, 'Tutti i 35 quesiti di S2 appartengono alla materia Scienze');

const s2OptionsCheck = s2Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(s2OptionsCheck, 'Tutti i 35 quesiti di S2 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const s2StatsZeroed = s2Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(s2StatsZeroed, 'Tutti i 35 quesiti di S2 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const s2FonteCheck = s2Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto S2 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(s2FonteCheck, 'Tutti i 35 quesiti di S2 indicano chiaramente "Lotto S2 del progetto" nella fonte senza attribuzioni esterne');

const s2NoLegacyFlag = s2Questions.every((q) => q.excludedFromTolcPool !== true);
check(s2NoLegacyFlag, 'Nessun quesito di S2 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// Regression checks specifici per casi rifiniti S2
const q491 = questionBank.find((q) => q.id === 491);
check(
  Boolean(q491 && q491.domanda.includes('\\Delta T = 45\\text{ K}') && q491.rispostaCorretta === '$72^\\circ\\text{C}$'),
  'Quesito S2-01 (ID 491) incremento 45 K da 27°C con risposta $72^\\circ\\text{C}$'
);

const q494 = questionBank.find((q) => q.id === 494);
check(
  Boolean(q494 && q494.domanda.includes('alluminio') && q494.rispostaCorretta === '$44^\\circ\\text{C}$'),
  'Quesito S2-04 (ID 494) equilibrio termico alluminio/acqua con risposta $44^\\circ\\text{C}$'
);

const q497 = questionBank.find((q) => q.id === 497);
check(
  Boolean(q497 && q497.rispostaCorretta === '$+500\\text{ J}$'),
  'Quesito S2-07 (ID 497) primo principio termodinamica con risposta $+500\\text{ J}$'
);

const q501 = questionBank.find((q) => q.id === 501);
check(
  Boolean(q501 && q501.rispostaCorretta === '$0{,}5\\text{ bar}$'),
  'Quesito S2-11 (ID 501) legge di Boyle espansione isoterma con risposta $0{,}5\\text{ bar}$'
);

const q503 = questionBank.find((q) => q.id === 503);
check(
  Boolean(q503 && q503.rispostaCorretta === '$1{,}0\\text{ mol}$'),
  'Quesito S2-13 (ID 503) equazione di stato gas perfetti con risposta $1{,}0\\text{ mol}$'
);

const q505 = questionBank.find((q) => q.id === 505);
check(
  Boolean(q505 && q505.rispostaCorretta === '$50\\%$'),
  'Quesito S2-15 (ID 505) rendimento ciclo di Carnot con risposta $50\\%$'
);

const q511 = questionBank.find((q) => q.id === 511);
check(
  Boolean(q511 && q511.domanda.includes('olio-acqua') && q511.rispostaCorretta === '$16\\text{ cm}$'),
  'Quesito S2-21 (ID 511) vasi comunicanti due liquidi con risposta $16\\text{ cm}$'
);

const q512 = questionBank.find((q) => q.id === 512);
check(
  Boolean(q512 && q512.domanda.includes('dislivello verticale della colonna di mercurio pari a $h = 76\\text{ cm}$') && q512.rispostaCorretta.includes('L’altezza verticale rimane invariata a $76\\text{ cm}$')),
  'Quesito S2-22 (ID 512) barometro di Torricelli inclinato con altezza verticale invariata a 76 cm'
);

const q513 = questionBank.find((q) => q.id === 513);
check(
  Boolean(q513 && q513.domanda.includes('più in alto') && q513.rispostaCorretta === '$6{,}8\\text{ kPa}$'),
  'Quesito S2-23 (ID 513) manometro differenziale con dislivello positivo e risposta $6{,}8\\text{ kPa}$'
);

const q517 = questionBank.find((q) => q.id === 517);
check(
  Boolean(q517 && q517.domanda.includes('V_{\\text{em}} = 80\\text{ dm}^3') && q517.rispostaCorretta === '$1000\\text{ dm}^3$'),
  'Quesito S2-27 (ID 517) galleggiamento ghiaccio con volume totale $1000\\text{ dm}^3$'
);

const q519 = questionBank.find((q) => q.id === 519);
check(
  Boolean(q519 && q519.rispostaCorretta === '$1{,}0\\text{ L/s}$'),
  'Quesito S2-29 (ID 519) portata volumetrica condotto con risposta $1{,}0\\text{ L/s}$'
);

const q522 = questionBank.find((q) => q.id === 522);
check(
  Boolean(q522 && q522.domanda.includes('d_2 = \\frac{d_1}{2}') && q522.rispostaCorretta === '$8\\text{ m/s}$'),
  'Quesito S2-32 (ID 522) continuità e diametro dimezzato con quadruplicazione velocità $8\\text{ m/s}$'
);

const q524 = questionBank.find((q) => q.id === 524);
check(
  Boolean(q524 && q524.domanda.includes('portata volumetrica') && q524.rispostaCorretta === '$2{,}0\\text{ L/s}$'),
  'Quesito S2-34 (ID 524) efflusso Torricelli combinato a portata con risposta $2{,}0\\text{ L/s}$'
);

const q525 = questionBank.find((q) => q.id === 525);
check(
  Boolean(q525 && q525.domanda.includes('fluido ideale incompressibile') && q525.rispostaCorretta === '$1{,}64 \\times 10^5\\text{ Pa}$'),
  'Quesito S2-35 (ID 525) teorema di Bernoulli quantitativo con risposta $1{,}64 \\times 10^5\\text{ Pa}$'
);

// ─── 2H. CENSIMENTO LOTTO S3 (ID 526–560) ───
section('2H. Censimento e Validazione Lotto S3 (ID 526–560)');
const s3Questions = questionBank.filter((q) => q.id >= 526 && q.id <= 560);
check(s3Questions.length === 35, `Lotto S3: esattamente 35 quesiti nel range ID 526–560 (trovati: ${s3Questions.length})`);

const s3AllScience = s3Questions.every((q) => q.materia === 'Scienze');
check(s3AllScience, 'Tutti i 35 quesiti di S3 appartengono alla materia Scienze');

const s3OptionsCheck = s3Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(s3OptionsCheck, 'Tutti i 35 quesiti di S3 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const s3StatsZeroed = s3Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(s3StatsZeroed, 'Tutti i 35 quesiti di S3 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const s3FonteCheck = s3Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto S3 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(s3FonteCheck, 'Tutti i 35 quesiti di S3 indicano chiaramente "Lotto S3 del progetto" nella fonte senza attribuzioni esterne');

const s3NoLegacyFlag = s3Questions.every((q) => q.excludedFromTolcPool !== true);
check(s3NoLegacyFlag, 'Nessun quesito di S3 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// Regression checks specifici per casi rifiniti S3
const q526 = questionBank.find((q) => q.id === 526);
check(
  Boolean(q526 && q526.domanda.includes('-3{,}2 \\times 10^{-8}') && q526.rispostaCorretta === '$2{,}0 \\times 10^{11}\\text{ elettroni}$'),
  'Quesito S3-01 (ID 526) quantizzazione carica elementare con risposta $2{,}0 \\times 10^{11}\\text{ elettroni}$'
);

const q527 = questionBank.find((q) => q.id === 527);
check(
  Boolean(q527 && q527.rispostaCorretta === '$0{,}60\\text{ N}$' && q527.risposteErrate.includes('$0{,}18\\text{ N}$')),
  'Quesito S3-02 (ID 527) legge di Coulomb con risposta $0{,}60\\text{ N}$ e distrattore $0{,}18\\text{ N}$'
);

const q530 = questionBank.find((q) => q.id === 530);
check(
  Boolean(q530 && q530.domanda.includes('-5{,}0') && q530.rispostaCorretta === 'Modulo pari a $0{,}020\\text{ N}$, diretta orizzontalmente verso sinistra'),
  'Quesito S3-05 (ID 530) carica negativa in campo elettrico uniforme con forza verso sinistra'
);

const q546 = questionBank.find((q) => q.id === 546);
check(
  Boolean(q546 && q546.rispostaCorretta === '$0{,}020\\text{ Wb}$' && q546.risposteErrate.includes('$0{,}40\\text{ Wb}$')),
  'Quesito S3-21 (ID 546) flusso magnetico con risposta $0{,}020\\text{ Wb}$ e distrattore $0{,}40\\text{ Wb}$'
);

const q549 = questionBank.find((q) => q.id === 549);
check(
  Boolean(q549 && q549.domanda.includes('18\\text{ m/s}') && q549.rispostaCorretta === '$30\\text{ Hz}$'),
  'Quesito S3-24 (ID 549) relazione d’onda fondamentale su corda con risposta $30\\text{ Hz}$'
);

const q550 = questionBank.find((q) => q.id === 550);
check(
  Boolean(q550 && q550.domanda.includes('altoparlanti') && q550.rispostaCorretta === '$\\Delta d = 1{,}60\\text{ m}$, con interferenza costruttiva'),
  'Quesito S3-25 (ID 550) interferenza onde sonore con differenza di cammino $1{,}60\\text{ m}$ costruttiva'
);

const q560 = questionBank.find((q) => q.id === 560);
check(
  Boolean(q560 && q560.domanda.includes('p = 30\\text{ cm}') && q560.rispostaCorretta === '$q = +60\\text{ cm}$ con ingrandimento $|G| = 2{,}0$'),
  'Quesito S3-35 (ID 560, MD) legge dei punti coniugati con $q = +60\\text{ cm}$ e $|G| = 2{,}0$'
);

// ─── 2I. CENSIMENTO LOTTO S4 (ID 561–595) ───
section('2I. Censimento e Validazione Lotto S4 (ID 561–595)');
const s4Questions = questionBank.filter((q) => q.id >= 561 && q.id <= 595);
check(s4Questions.length === 35, `Lotto S4: esattamente 35 quesiti nel range ID 561–595 (trovati: ${s4Questions.length})`);

const s4AllScience = s4Questions.every((q) => q.materia === 'Scienze');
check(s4AllScience, 'Tutti i 35 quesiti di S4 appartengono alla materia Scienze');

const s4OptionsCheck = s4Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(s4OptionsCheck, 'Tutti i 35 quesiti di S4 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const s4StatsZeroed = s4Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(s4StatsZeroed, 'Tutti i 35 quesiti di S4 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const s4FonteCheck = s4Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto S4 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(s4FonteCheck, 'Tutti i 35 quesiti di S4 indicano chiaramente "Lotto S4 del progetto" nella fonte senza attribuzioni esterne');

const s4NoLegacyFlag = s4Questions.every((q) => q.excludedFromTolcPool !== true);
check(s4NoLegacyFlag, 'Nessun quesito di S4 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// Regression checks specifici per casi rifiniti S4
const q561 = questionBank.find((q) => q.id === 561);
check(
  Boolean(q561 && q561.domanda.includes('^{56}_{26}\\text{Fe}') && q561.rispostaCorretta === '$26\\text{ protoni}$, $30\\text{ neutroni}$ e $26\\text{ elettroni}$'),
  'Quesito S4-01 (ID 561) composizione subatomica del ferro-56 neutro'
);

const q562 = questionBank.find((q) => q.id === 562);
check(
  Boolean(q562 && q562.domanda.includes('^{27}_{13}\\text{Al}^{3+}') && q562.rispostaCorretta === '$13\\text{ protoni}$, $14\\text{ neutroni}$ e $10\\text{ elettroni}$'),
  'Quesito S4-02 (ID 562) composizione subatomica catione alluminio Al3+'
);

const q568 = questionBank.find((q) => q.id === 568);
check(
  Boolean(q568 && q568.domanda.includes('massa atomica relativa media') && q568.rispostaCorretta === '$35{,}5\\text{ u}$'),
  'Quesito S4-08 (ID 568) massa atomica relativa media del cloro con $35{,}5\\text{ u}$'
);

const q586 = questionBank.find((q) => q.id === 586);
check(
  Boolean(q586 && q586.rispostaCorretta.includes('gas nobili dal neon in poi') && q586.risposteErrate.length === 4),
  'Quesito S4-26 (ID 586) regola dell’ottetto con circoscrizione ai gas nobili dal neon in poi'
);

const q595 = questionBank.find((q) => q.id === 595);
check(
  Boolean(q595 && q595.domanda.includes('SO}_2') && q595.rispostaCorretta === '$18\\text{ elettroni di valenza}$, geometria piegata (angolare con angolo $< 120^\\circ$) e molecola polare ($\\mu \\ne 0$)'),
  'Quesito S4-35 (ID 595, MD) analisi multi-step SO2 (18 elettroni, piegata < 120°, polare)'
);

// ─── 2J. CENSIMENTO LOTTO S5 (ID 596–637) ───
section('2J. Censimento e Validazione Lotto S5 (ID 596–637)');
const s5Questions = questionBank.filter((q) => q.id >= 596 && q.id <= 637);
check(s5Questions.length === 42, `Lotto S5: esattamente 42 quesiti nel range ID 596–637 (trovati: ${s5Questions.length})`);

const s5AllScience = s5Questions.every((q) => q.materia === 'Scienze');
check(s5AllScience, 'Tutti i 42 quesiti di S5 appartengono alla materia Scienze');

const s5OptionsCheck = s5Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(s5OptionsCheck, 'Tutti i 42 quesiti di S5 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const s5StatsZeroed = s5Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(s5StatsZeroed, 'Tutti i 42 quesiti di S5 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const s5FonteCheck = s5Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto S5 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(s5FonteCheck, 'Tutti i 42 quesiti di S5 indicano chiaramente "Lotto S5 del progetto" nella fonte senza attribuzioni esterne');

const s5NoLegacyFlag = s5Questions.every((q) => q.excludedFromTolcPool !== true);
check(s5NoLegacyFlag, 'Nessun quesito di S5 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// Regression checks specifici per casi rifiniti S5
const q596 = questionBank.find((q) => q.id === 596);
check(
  Boolean(q596 && q596.domanda.includes('Lavoisier') && q596.rispostaCorretta === '$44{,}0\\text{ g}$'),
  'Quesito S5-01 (ID 596) legge di conservazione della massa con risposta $44{,}0\\text{ g}$'
);

const q600 = questionBank.find((q) => q.id === 600);
check(
  Boolean(q600 && q600.domanda.includes('KMnO}_4') && q600.rispostaCorretta === '$+7$'),
  'Quesito S5-05 (ID 600) numero di ossidazione del manganese in KMnO4 pari a $+7$'
);

const q603 = questionBank.find((q) => q.id === 603);
check(
  Boolean(q603 && q603.domanda.includes('Cr}_2\\text{O}_7^{2-}') && q603.rispostaCorretta === '$+6$'),
  'Quesito S5-08 (ID 603) numero di ossidazione del cromo in Cr2O7(2-) pari a $+6$'
);

const q609 = questionBank.find((q) => q.id === 609);
check(
  Boolean(q609 && q609.domanda.includes('V_m = 22{,}4\\text{ L/mol}') && q609.rispostaCorretta === '$56{,}0\\text{ L}$'),
  'Quesito S5-14 (ID 609) volume molare standard con condizioni esplicite e risposta $56{,}0\\text{ L}$'
);

const q626 = questionBank.find((q) => q.id === 626);
check(
  Boolean(q626 && q626.domanda.includes('modello di dissociazione ionica completa e ideale') && q626.rispostaCorretta === '$i = 5$'),
  'Quesito S5-31 (ID 626) coefficiente di van ’t Hoff teorico con risposta $i = 5$'
);

const q637 = questionBank.find((q) => q.id === 637);
check(
  Boolean(q637 && q637.difficolta === 'medio-difficile' && q637.rispostaCorretta === '$[\\text{H}^+] = 0{,}10\\text{ M}$ e $\\text{pH} = 1{,}0$'),
  'Quesito S5-42 (ID 637, MD) neutralizzazione multi-step con eccesso, [H+] = 0,10 M e pH = 1,0'
);

// ─── 2K. CENSIMENTO LOTTO L1 (ID 638–687) ───
section('2K. Censimento e Validazione Lotto L1 (ID 638–687)');
const l1Questions = questionBank.filter((q) => q.id >= 638 && q.id <= 687);
check(l1Questions.length === 50, `Lotto L1: esattamente 50 quesiti nel range ID 638–687 (trovati: ${l1Questions.length})`);

const l1AllLogica = l1Questions.every((q) => q.materia === 'Logica');
check(l1AllLogica, 'Tutti i 50 quesiti di L1 appartengono alla materia Logica');

const l1OptionsCheck = l1Questions.every((q) => (
  typeof q.rispostaCorretta === 'string' &&
  Array.isArray(q.risposteErrate) &&
  q.risposteErrate.length === 4
));
check(l1OptionsCheck, 'Tutti i 50 quesiti di L1 hanno 1 risposta corretta e 4 errate (5 opzioni totali)');

const l1StatsZeroed = l1Questions.every((q) => (
  q.numeroVolteProposta === 0 &&
  q.numeroRisposteCorrette === 0 &&
  q.numeroRisposteErrate === 0
));
check(l1StatsZeroed, 'Tutti i 50 quesiti di L1 hanno i contatori statistici azzerati (numeroVolteProposta=0, corrette=0, errate=0)');

const l1FonteCheck = l1Questions.every((q) => (
  typeof q.fonte === 'string' &&
  q.fonte.includes('Lotto L1 del progetto') &&
  !q.fonte.toLowerCase().includes('cisia')
));
check(l1FonteCheck, 'Tutti i 50 quesiti di L1 indicano chiaramente "Lotto L1 del progetto" nella fonte senza attribuzioni esterne');

const l1NoLegacyFlag = l1Questions.every((q) => q.excludedFromTolcPool !== true);
check(l1NoLegacyFlag, 'Nessun quesito di L1 possiede excludedFromTolcPool: true (tutti nel pool attivo)');

// Regression checks specifici per casi rifiniti L1
const q638 = questionBank.find((q) => q.id === 638);
check(
  Boolean(q638 && q638.difficolta === 'medio-facile' && q638.domanda.includes('proposizione') && q638.rispostaCorretta.includes('senso compiuto')),
  'Quesito L1-01 (ID 638, MF) definizione di proposizione logica'
);

const q648 = questionBank.find((q) => q.id === 648);
check(
  Boolean(q648 && q648.domanda.includes('affermazione del conseguente') && q648.rispostaCorretta.includes('modalità Risparmio Energetico')),
  'Quesito L1-11 (ID 648) fallacia dell’affermazione del conseguente con schema formale autonomo'
);

const q649 = questionBank.find((q) => q.id === 649);
check(
  Boolean(q649 && q649.domanda.includes('negazione dell’antecedente') && q649.rispostaCorretta.includes('non riceverà il punteggio massimo')),
  'Quesito L1-12 (ID 649) fallacia della negazione dell’antecedente con schema formale autonomo'
);

const q650 = questionBank.find((q) => q.id === 650);
check(
  Boolean(q650 && q650.domanda.includes('condizione sufficiente') && q650.rispostaCorretta.includes('diritto certo di partecipare alla finale')),
  'Quesito L1-13 (ID 650) condizione sufficiente formale pura in contesto autonomo'
);

const q651 = questionBank.find((q) => q.id === 651);
check(
  Boolean(q651 && q651.difficolta === 'medio-difficile' && q651.domanda.includes('*solo se*') && q651.rispostaCorretta.startsWith('$V \\to M$')),
  'Quesito L1-14 (ID 651, MD) formalizzazione condizione necessaria con "solo se"'
);

const q665 = questionBank.find((q) => q.id === 665);
check(
  Boolean(q665 && q665.difficolta === 'medio-difficile' && q665.domanda.includes('A \\to (B \\land C)') && q665.rispostaCorretta === '$A \\land (\\neg B \\lor \\neg C)$'),
  'Quesito L1-28 (ID 665, MD) negazione annidata di implicazione con congiunzione'
);

const q679 = questionBank.find((q) => q.id === 679);
check(
  Boolean(q679 && q679.difficolta === 'medio-difficile' && q679.domanda.includes('\\forall x [P(x) \\to Q(x)]') && q679.rispostaCorretta === '$\\exists x [P(x) \\land \\neg Q(x)]$'),
  'Quesito L1-42 (ID 679, MD) negazione formale di universale condizionale'
);

const q686 = questionBank.find((q) => q.id === 686);
check(
  Boolean(q686 && q686.domanda.includes('verità vacua') && q686.rispostaCorretta.includes('sicuramente VERA, indipendentemente')),
  'Quesito L1-49 (ID 686) proprietà di verità vacua dell’implicazione materiale senza pseudo-Scoto'
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

// ─── 5. POOL ATTIVO 647 QUESITI E RIPARTIZIONE PER MATERIA ───
section('5. Pool Attivo 647 Quesiti e Ripartizione per Materia');
check(activeQuestionsFromService.length === 647, `getQuestions() restituisce esattamente 647 quesiti attivi (trovati: ${activeQuestionsFromService.length})`);

const activeSubjects = {
  Matematica: 250,
  Logica: 98,
  Scienze: 250,
  'Comprensione verbale': 49
};

const activeDistribution = {};
activeQuestionsFromService.forEach((q) => {
  activeDistribution[q.materia] = (activeDistribution[q.materia] || 0) + 1;
});

check(activeDistribution['Matematica'] === 250, `Matematica attiva: 250 (trovati: ${activeDistribution['Matematica']})`);
check(activeDistribution['Logica'] === 98, `Logica attiva: 98 (trovati: ${activeDistribution['Logica']})`);
check(activeDistribution['Scienze'] === 250, `Scienze attiva: 250 (trovati: ${activeDistribution['Scienze']})`);
check(activeDistribution['Comprensione verbale'] === 49, `Comprensione verbale attiva: 49 (trovati: ${activeDistribution['Comprensione verbale']})`);

const totalActiveSum = Object.values(activeDistribution).reduce((sum, v) => sum + v, 0);
check(totalActiveSum === 647, `Somma per materia pool attivo = 647 (250 + 98 + 250 + 49 = ${totalActiveSum})`);

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
const m4Count = 25;
const m5Count = 33;
const s1Count = 35;
const s2Count = 35;
const s3Count = 35;
const s4Count = 35;
const s5Count = 42;
const l1Count = 50;
const physicalTotal = questionBank.length;
const legacyCount = questionBank.filter((q) => q.excludedFromTolcPool === true).length;
const activeTotal = activeQuestionsFromService.length;

check(baseCount + m1Count + m2Count + m3Count + m4Count + m5Count + s1Count + s2Count + s3Count + s4Count + s5Count + l1Count === physicalTotal, `Uguaglianza fisica verificata: ${baseCount} (base) + ${m1Count} (M1) + ${m2Count} (M2) + ${m3Count} (M3) + ${m4Count} (M4) + ${m5Count} (M5) + ${s1Count} (S1) + ${s2Count} (S2) + ${s3Count} (S3) + ${s4Count} (S4) + ${s5Count} (S5) + ${l1Count} (L1) = ${physicalTotal} (fisici)`);
check(physicalTotal - legacyCount === activeTotal, `Uguaglianza attiva verificata: ${physicalTotal} (fisici) - ${legacyCount} (legacy) = ${activeTotal} (attivi)`);

console.log(`\nRisultato testQuiz.mjs: ${passed} test passati, ${failed} falliti.`);

if (failed > 0) {
  process.exit(1);
}
