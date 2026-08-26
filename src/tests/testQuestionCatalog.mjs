import rawQuestionBank from '../data/questionBank.js';
import {
  getCanonicalQuestionId,
  getExactDuplicateGroups,
  getQuestionById,
  mergeQuestionStatsByCanonicalId,
  QUESTION_CATALOG_SUMMARY
} from '../data/questionCatalog.js';
import { buildMathContent } from '../utils/mathContent.js';

let passed = 0;
let failed = 0;
const HIDDEN_CHARACTER_REGEX = /[\u00a0\u200b\u200c\u200d\ufeff]/u;
const REAL_LINE_BREAK_REGEX = /[\r\n]/u;

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

section('Deduplicazione e Catalogo');
check(rawQuestionBank.length === 520, 'La banca dati fisica contiene 520 record totali');
check(QUESTION_CATALOG_SUMMARY.totalCanonicalQuestions === 520, 'Il catalogo canonico contiene 520 domande');
check(QUESTION_CATALOG_SUMMARY.totalTolcPoolQuestions === 485, 'Il pool attivo TOLC-I contiene 485 quesiti');
check(QUESTION_CATALOG_SUMMARY.totalLegacyExcluded === 35, 'I record legacy esclusi sono esattamente 35');
check(QUESTION_CATALOG_SUMMARY.totalExactDuplicateGroups === 0, 'Non sono più presenti gruppi di duplicati certi');
check(QUESTION_CATALOG_SUMMARY.totalExactDuplicateRows === 0, 'Non sono più presenti copie ridondanti');


const exactGroups = getExactDuplicateGroups();
check(exactGroups.length === 0, 'L’elenco dei duplicati certi è vuoto');
check(getCanonicalQuestionId('1') === '1', 'Gli ID attivi vengono mantenuti senza rimappature');
check(getQuestionById('1')?.id === 1, 'La lookup delle domande attive restituisce il record corretto');

const functionShiftQuestion = rawQuestionBank.find((item) => item.domanda === 'Se $f(x)=x^2-x^3$, allora $f(x-2)$ vale:');
const polynomialQuestion = rawQuestionBank.find((item) => item.domanda.includes('coppia di polinomi $p(x)$ e $q(x)$'));
const triangleRatioQuestion = rawQuestionBank.find((item) => item.rispostaCorretta === '$\\frac{2\\sqrt{3}\\pi}{9}$');
const trigReciprocalQuestion = rawQuestionBank.find((item) => item.domanda === 'L’equazione trigonometrica $\\sin(x) = \\frac{1}{\\sin(x)}$ ammette come soluzioni:');
const trigInequalityQuestion = rawQuestionBank.find((item) => item.domanda === 'L’equazione $\\cos^2 x - \\cos x - 2 \\ge 0$ è verificata per:');
const trigIntervalQuestion = rawQuestionBank.find((item) => item.domanda === 'Per $0 \\le x \\le \\frac{\\pi}{2}$, l’equazione $\\sqrt{3}\\sin^2 x + \\sqrt{3}\\cos^2 x - 2\\sin x = 0$ ha soluzione:');
const oxyQuestion = rawQuestionBank.find((item) => item.id === 171);
const concentricSpheresQuestion = rawQuestionBank.find((item) => item.id === 19);
const exothermicReactionQuestion = rawQuestionBank.find((item) => item.id === 38);
const parallelLinesQuestion = rawQuestionBank.find((item) => item.id === 1);
const cubeRootInequalityQuestion = rawQuestionBank.find((item) => item.id === 4);
const isotropicLightQuestion = rawQuestionBank.find((item) => item.id === 36);
const rightTriangleQuestion = rawQuestionBank.find((item) => item.id === 187);
const absoluteValueQuestion = rawQuestionBank.find((item) => item.id === 188);
const isotropicLightVolume1Question = rawQuestionBank.find((item) => item.id === 253);
const exothermicReactionVolume1Question = rawQuestionBank.find((item) => item.id === 257);
check(
  functionShiftQuestion?.domanda === 'Se $f(x)=x^2-x^3$, allora $f(x-2)$ vale:',
  'La formulazione del quesito sulla composizione f(x-2) è stata normalizzata correttamente'
);
check(
  functionShiftQuestion?.rispostaCorretta === '$(3-x)(x-2)^2$',
  'La risposta corretta del quesito sulla composizione f(x-2) coincide con la fonte verificata'
);
check(
  polynomialQuestion?.domanda.includes('$p(x)$') && polynomialQuestion?.domanda.includes('$q(x)$'),
  'Il quesito sui polinomi usa ora una notazione matematica esplicita e leggibile'
);
check(
  polynomialQuestion?.rispostaCorretta === '$p(x) + q(x)$ ha grado al più 3 e $p(x) \\cdot q(x)$ ha grado 6',
  'La risposta corretta del quesito sui polinomi è stata normalizzata con una resa matematica coerente'
);
check(
  triangleRatioQuestion?.rispostaCorretta === '$\\frac{2\\sqrt{3}\\pi}{9}$',
  'Il quesito sul triangolo inscritto usa una frazione matematica esplicita per la risposta corretta'
);
check(
  trigReciprocalQuestion?.domanda === 'L’equazione trigonometrica $\\sin(x) = \\frac{1}{\\sin(x)}$ ammette come soluzioni:',
  'Il secondo quesito trigonometrico usa ora una formulazione matematica pulita senza reintrodurre duplicati certi'
);
check(
  trigInequalityQuestion?.domanda === 'L’equazione $\\cos^2 x - \\cos x - 2 \\ge 0$ è verificata per:',
  'Il quesito sulla disequazione trigonometrica isola correttamente il testo dalla formula'
);
check(
  trigIntervalQuestion?.domanda === 'Per $0 \\le x \\le \\frac{\\pi}{2}$, l’equazione $\\sqrt{3}\\sin^2 x + \\sqrt{3}\\cos^2 x - 2\\sin x = 0$ ha soluzione:',
  'Il quesito con intervallo trigonometrico usa ora una notazione matematica esplicita e leggibile'
);
check(
  oxyQuestion?.domanda === 'Rispetto ad un piano cartesiano $Oxy$, i punti del piano diversi dal punto $(-1,2)$ sono tutti e soli i punti $(x,y)$ tali che:',
  'Il quesito sul piano cartesiano Oxy usa ora una notazione uniforme e leggibile anche nel testo della domanda'
);
check(
  oxyQuestion?.rispostaCorretta === '$x \\ne -1$ oppure $y \\ne 2$',
  'La risposta corretta del quesito sul piano cartesiano usa ora una rappresentazione matematica esplicita'
);
check(
  concentricSpheresQuestion?.domanda === 'Date due sfere concentriche di raggio $1$ e $r$ (con $r < 1$), che valore deve assumere $r$ affinché il volume della parte esterna alla sfera minore sia la metà del volume della sfera maggiore?',
  'Il quesito sulle sfere concentriche usa ora una notazione coerente per raggi e vincoli'
);
check(
  concentricSpheresQuestion?.risposteErrate.includes('$\\frac{1}{2}$'),
  'Le risposte errate del quesito sulle sfere usano ora frazioni matematiche coerenti'
);
check(
  exothermicReactionQuestion?.domanda === 'La reazione $\\mathrm{CaO + H_2O \\to Ca(OH)_2}$ è esotermica. Questo significa che:',
  'Il quesito sulla reazione esotermica usa ora una formula chimica leggibile e coerente con il rendering matematico'
);
check(
  exothermicReactionQuestion?.rispostaCorretta === 'la reazione sviluppa calore e il $\\mathrm{Ca(OH)_2}$ si riscalda',
  'La risposta corretta del quesito sulla reazione esotermica è stata normalizzata con formula chimica esplicita'
);
check(
  parallelLinesQuestion?.domanda === 'In un piano cartesiano, quale delle seguenti rette è parallela alla retta passante per i punti di coordinate $(1,0)$ e $(0,1)$?',
  'Il quesito sulle rette parallele usa ora coordinate ed equazioni in notazione matematica esplicita'
);
check(
  parallelLinesQuestion?.rispostaCorretta === '$x + y = 3$',
  'Le risposte del quesito sulle rette parallele sono state convertite da forma verbale a forma matematica'
);
check(
  cubeRootInequalityQuestion?.domanda === 'Si ha: $\\sqrt[3]{x^3 + 8} < 0$',
  'La disequazione con radice cubica usa ora una rappresentazione matematica esplicita'
);
check(
  cubeRootInequalityQuestion?.rispostaCorretta === 'se e solo se $x < -2$',
  'Le risposte del quesito con radice cubica mantengono testo normale e disequazione ben separati'
);
check(
  isotropicLightQuestion?.rispostaCorretta === '$\\frac{I}{4}$',
  'Il primo quesito sull’intensità luminosa usa ora frazioni tipografiche corrette'
);
check(
  isotropicLightVolume1Question?.rispostaCorretta === '$\\frac{I}{4}$',
  'La seconda versione del quesito sull’intensità luminosa è stata allineata alla stessa resa matematica'
);
check(
  isotropicLightVolume1Question?.domanda === 'Una sorgente luminosa emette luce isotropicamente. Indicata con $I$ l’intensità luminosa misurata alla distanza $d$ dalla sorgente, quale intensità si osserva alla distanza $2d$?',
  'La seconda versione del quesito sull’intensità luminosa mantiene una formulazione distinta ma matematicamente coerente'
);
check(
  rightTriangleQuestion?.domanda === 'Fissato nel piano un sistema di assi cartesiani ortogonali $Oxy$, consideriamo i punti $A=(1,0)$ e $B=(0,2)$. Per quale scelta del punto $C$ il triangolo $ABC$ non è rettangolo?',
  'Il quesito sul triangolo rettangolo usa ora coordinate e punti in notazione uniforme'
);
check(
  absoluteValueQuestion?.domanda === 'L’equazione $|x - 1| = 1 - |x|$ ha:',
  'Il quesito con valori assoluti usa ora una formula esplicita e completa di punteggiatura finale'
);
check(
  exothermicReactionVolume1Question?.domanda === 'Per la reazione $\\mathrm{CaO + H_2O \\to Ca(OH)_2}$, il fatto che il processo sia esotermico implica che:',
  'La seconda versione del quesito sulla reazione esotermica è stata riallineata alla forma chimica più leggibile'
);

const mergedStats = mergeQuestionStatsByCanonicalId([
  {
    id: '1',
    questionId: '1',
    numeroVolteProposta: 1,
    numeroRisposteCorrette: 2,
    numeroRisposteErrate: 1
  },
  {
    id: '1',
    questionId: '1',
    numeroVolteProposta: 3,
    numeroRisposteCorrette: 1,
    numeroRisposteErrate: 4
  }
]);

check(Object.keys(mergedStats).length === 1, 'Le statistiche sulla stessa domanda vengono aggregate in un solo record');
check(mergedStats['1'].numeroVolteProposta === 4, 'I conteggi di visualizzazione vengono sommati correttamente');
check(mergedStats['1'].numeroRisposteCorrette === 3, 'Le risposte corrette vengono aggregate correttamente');
check(mergedStats['1'].numeroRisposteErrate === 5, 'Le risposte errate vengono aggregate correttamente');

section('Rendering formule');
const wholeMath = buildMathContent('x più y uguale 3', { preferWholeMath: true });
check(wholeMath.some((segment) => segment.type === 'math' && segment.content.includes('=')), 'Le formule algebriche verbali vengono convertite in notazione matematica');

const symbolicMath = buildMathContent('CaO + H_2O = Ca(OH)_2', { preferWholeMath: true });
check(symbolicMath.some((segment) => segment.type === 'math' && segment.content.includes('Ca(OH)_2')), 'Le formule chimiche con pedici vengono rese come segmenti matematici');

const greekMath = buildMathContent('0 ≤ x ≤ π', { preferWholeMath: true });
check(greekMath.some((segment) => segment.type === 'math' && segment.content.includes('\\pi')), 'I simboli greci e le disequazioni vengono convertiti per KaTeX');

const spacedMixedAnswer = buildMathContent('è uguale a 4π radianti', { preferWholeMath: true });
check(
  spacedMixedAnswer.length === 3
    && spacedMixedAnswer[0].type === 'text'
    && spacedMixedAnswer[1].type === 'math'
    && spacedMixedAnswer[2].type === 'text',
  'Le risposte miste testo-formula mantengono correttamente gli spazi visivi'
);

const shortInequality = buildMathContent('x minore 0', { preferWholeMath: true });
check(
  shortInequality.some((segment) => segment.type === 'math' && segment.content === 'x < 0'),
  'Le disequazioni brevi vengono convertite correttamente anche quando sono espresse a parole'
);

const implicitPiFraction = buildMathContent('x = 3π 4', { preferWholeMath: true });
check(
  implicitPiFraction.some((segment) => segment.type === 'math' && segment.content === 'x = \\frac{3\\pi}{4}'),
  'Le frazioni con π scritte come 3π 4 vengono rese correttamente come 3π/4'
);

const implicitPiFractionWithSeries = buildMathContent('x = π 2 + kπ, per ogni valore intero di k', { preferWholeMath: true });
check(
  implicitPiFractionWithSeries.some((segment) => segment.type === 'math' && segment.content === 'x = \\frac{\\pi}{2} + k\\pi'),
  'Le soluzioni generali con π 2 vengono rese correttamente come π/2'
);

const implicitPiFractionWithRadical = buildMathContent('2 √ 3π 9', { preferWholeMath: true });
check(
  implicitPiFractionWithRadical.some((segment) => segment.type === 'math' && segment.content === '\\frac{2 \\sqrt{3}\\pi}{9}'),
  'Le frazioni con radicale e π vengono rese correttamente'
);

const explicitTriangleRatio = buildMathContent('$\\frac{2\\sqrt{3}\\pi}{9}$', { preferWholeMath: true });
check(
  explicitTriangleRatio.some((segment) => segment.type === 'math' && segment.content === '\\frac{2\\sqrt{3}\\pi}{9}'),
  'Le risposte scritte già in LaTeX mantengono una resa matematica nitida e stabile'
);

const explicitTrigPrompt = buildMathContent('L’equazione $\\cos^2 x - \\cos x - 2 \\ge 0$ è verificata per:', { preferWholeMath: false });
check(
  explicitTrigPrompt.some((segment) => segment.type === 'text' && segment.content.includes('L’equazione'))
    && explicitTrigPrompt.some((segment) => segment.type === 'math' && segment.content === '\\cos^2 x - \\cos x - 2 \\ge 0')
    && explicitTrigPrompt.some((segment) => segment.type === 'text' && segment.content.includes('verificata per')),
  'Le domande con testo introduttivo e formula centrale mantengono separati testo normale e formula'
);

const explicitPolynomialPrompt = buildMathContent('Quale delle seguenti affermazioni vale per ogni coppia di polinomi $p(x)$ e $q(x)$ di grado 3?', { preferWholeMath: false });
check(
  explicitPolynomialPrompt.some((segment) => segment.type === 'math' && segment.content === 'p(x)')
    && explicitPolynomialPrompt.some((segment) => segment.type === 'math' && segment.content === 'q(x)')
    && explicitPolynomialPrompt.some((segment) => segment.type === 'text' && segment.content.includes('di grado 3')),
  'Le formule inline brevi come p(x) e q(x) non perdono più gli spazi del testo circostante'
);

const explicitSingleLetterChoices = buildMathContent('$e$ oppure $q$', { preferWholeMath: false });
check(
  explicitSingleLetterChoices.filter((segment) => segment.type === 'math').map((segment) => segment.content).join('|') === 'e|q',
  'Le formule inline costituite da una sola lettera, come e e q, vengono rese correttamente senza mostrare i delimitatori $'
);

const explicitLinearEquation = buildMathContent('$x + y = 3$', { preferWholeMath: false });
check(
  explicitLinearEquation.some((segment) => segment.type === 'math' && segment.content === 'x + y = 3'),
  'Le rette in forma esplicita come x + y = 3 vengono mantenute come equazioni nitide'
);

const explicitIntensityFraction = buildMathContent('$\\frac{I}{4}$', { preferWholeMath: false });
check(
  explicitIntensityFraction.some((segment) => segment.type === 'math' && segment.content === '\\frac{I}{4}'),
  'Le risposte con grandezze fisiche e frazioni mantengono correttamente il numeratore simbolico'
);

const explicitIndexedVariable = buildMathContent('Dato $x_n$, si consideri la successione.', { preferWholeMath: false });
check(
  explicitIndexedVariable.some((segment) => segment.type === 'math' && segment.content === 'x_n')
    && explicitIndexedVariable.some((segment) => segment.type === 'text' && segment.content.includes('successione')),
  'Le variabili indicizzate come x_n restano leggibili senza fondersi con il testo'
);

const explicitLabeledLine = buildMathContent('Le rette $r_1: y = 0$ e $r_2: y = 2x$ delimitano il piano.', { preferWholeMath: false });
check(
  explicitLabeledLine.some((segment) => segment.type === 'math' && segment.content === 'r_1: y = 0')
    && explicitLabeledLine.some((segment) => segment.type === 'math' && segment.content === 'r_2: y = 2x')
    && explicitLabeledLine.some((segment) => segment.type === 'text' && segment.content.includes('delimitano il piano')),
  'Le etichette di rette con pedici e due punti vengono mantenute come formule isolate e leggibili'
);

const proseWithMathWord = buildMathContent('il suo seno è positivo', { preferWholeMath: true });
check(
  proseWithMathWord.length === 1 && proseWithMathWord[0].type === 'text',
  'Le frasi discorsive con termini matematici restano testo normale se non sono vere formule'
);

const plainText = buildMathContent('La banca dati non è ufficiale.');
check(plainText.length === 1 && plainText[0].type === 'text', 'Il testo normale rimane testo normale');

const currencyPrompt = rawQuestionBank.find((item) => item.domanda.includes('benzina è venduta in dollari'));
const currencySegments = buildMathContent(currencyPrompt?.domanda || '', { preferWholeMath: false });
check(
  currencySegments.every((segment) => segment.type === 'text'),
  'I simboli di valuta non vengono interpretati erroneamente come formule LaTeX'
);

const suspiciousArtifacts = [];
const textIntegrityIssues = [];
const sourceNotationIssues = [];
for (const question of rawQuestionBank) {
  const fields = [
    { label: 'domanda', text: question.domanda, preferWholeMath: false },
    { label: 'rispostaCorretta', text: question.rispostaCorretta, preferWholeMath: true },
    ...(question.risposteErrate || []).map((text, index) => ({
      label: `rispostaErrata_${index + 1}`,
      text,
      preferWholeMath: true
    }))
  ];

  fields.forEach(({ label, text, preferWholeMath }) => {
    if ((label !== 'domanda' && REAL_LINE_BREAK_REGEX.test(text)) || HIDDEN_CHARACTER_REGEX.test(text)) {
      textIntegrityIssues.push({
        id: question.id,
        label,
        text
      });
    }


    if (
      /\b(?:pedice|apice|radice cubica di|radice quadrata di)\b/iu.test(text)
      || /\bI fratto\b/u.test(text)
      || /^x più y uguale 3$/u.test(text)
      || /^x uguale y meno 1$/u.test(text)
      || /^2 x più 3 y uguale 0$/u.test(text)
      || /^L’equazione \|x − 1\| = 1 − \|x\| ha$/u.test(text)
    ) {
      sourceNotationIssues.push({
        id: question.id,
        label,
        text
      });
    }

    buildMathContent(text, { preferWholeMath })
      .filter((segment) => segment.type === 'math')
      .forEach((segment) => {
        if (/(?:è\s*=\s*a|\^\{radice\}|\\cdot ogni|\+ grande|\+ piccolo|\\pi\s+[0-9]) /u.test(`${segment.content} `)) {
          suspiciousArtifacts.push({
            id: question.id,
            source: segment.source || text,
            content: segment.content
          });
        }
      });
  });
}

check(
  suspiciousArtifacts.length === 0,
  'La scansione globale non rileva più artefatti grafici dovuti a spazi mancanti o conversioni errate'
);
check(
  textIntegrityIssues.length === 0,
  'La scansione globale non rileva ritorni a capo reali o caratteri invisibili nelle domande e nelle risposte'
);
check(
  sourceNotationIssues.length === 0,
  'La scansione globale non rileva più residui testuali su formule, apici o pedici lasciati in forma verbale'
);

console.log(`\nRisultato: ${passed} test passati, ${failed} falliti.`);

if (failed > 0) {
  process.exit(1);
}
