import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import rawQuestionBank from '../src/data/questionBank.js';
import {
  getExactDuplicateGroups,
  QUESTION_CATALOG_SUMMARY
} from '../src/data/questionCatalog.js';
import {
  buildQuestionSignature,
  normalizeComparableText,
  normalizeAnswerSet
} from '../src/utils/textNormalization.js';

function bigrams(value) {
  const normalized = ` ${normalizeComparableText(value)} `;
  const result = [];
  for (let index = 0; index < normalized.length - 1; index += 1) {
    result.push(normalized.slice(index, index + 2));
  }
  return result;
}

function diceCoefficient(left, right) {
  const leftBigrams = bigrams(left);
  const rightBigrams = bigrams(right);

  if (leftBigrams.length === 0 || rightBigrams.length === 0) {
    return 0;
  }

  const rightCounts = new Map();
  rightBigrams.forEach((item) => {
    rightCounts.set(item, (rightCounts.get(item) || 0) + 1);
  });

  let overlap = 0;
  leftBigrams.forEach((item) => {
    const count = rightCounts.get(item) || 0;
    if (count > 0) {
      overlap += 1;
      rightCounts.set(item, count - 1);
    }
  });

  return (2 * overlap) / (leftBigrams.length + rightBigrams.length);
}

function describeDifferences(left, right) {
  const differences = [];
  const leftQuestion = normalizeComparableText(left.domanda);
  const rightQuestion = normalizeComparableText(right.domanda);
  const leftCorrect = normalizeComparableText(left.rispostaCorretta);
  const rightCorrect = normalizeComparableText(right.rispostaCorretta);
  const leftAnswers = normalizeAnswerSet(left);
  const rightAnswers = normalizeAnswerSet(right);

  if (leftQuestion !== rightQuestion) {
    differences.push('testo della domanda differente');
  }

  if (left.materia !== right.materia) {
    differences.push('materia differente');
  }

  if (leftCorrect !== rightCorrect) {
    differences.push('risposta corretta differente');
  }

  if (JSON.stringify(leftAnswers) !== JSON.stringify(rightAnswers)) {
    const overlap = leftAnswers.filter((item) => rightAnswers.includes(item)).length;
    if (overlap === leftAnswers.length && overlap === rightAnswers.length) {
      differences.push('stesso set di risposte ma ordine differente');
    } else {
      differences.push('set di risposte differente');
    }
  }

  return differences;
}

function buildSimilarPairs() {
  const exactSignatures = new Set(getExactDuplicateGroups().map((group) => buildQuestionSignature({
    materia: group.materia,
    domanda: group.domanda,
    rispostaCorretta: group.rispostaCorretta,
    risposteErrate: group.risposte.slice(1)
  })));

  const pairs = [];

  for (let leftIndex = 0; leftIndex < rawQuestionBank.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < rawQuestionBank.length; rightIndex += 1) {
      const left = rawQuestionBank[leftIndex];
      const right = rawQuestionBank[rightIndex];

      if (buildQuestionSignature(left) === buildQuestionSignature(right)) {
        continue;
      }

      const questionSimilarity = diceCoefficient(left.domanda, right.domanda);
      const correctSimilarity = diceCoefficient(left.rispostaCorretta, right.rispostaCorretta);
      const leftAnswers = normalizeAnswerSet(left);
      const rightAnswers = normalizeAnswerSet(right);
      const overlap = leftAnswers.filter((item) => rightAnswers.includes(item)).length;
      const answerSimilarity = overlap / Math.max(new Set([...leftAnswers, ...rightAnswers]).size, 1);
      const subjectBonus = left.materia === right.materia ? 1 : 0;
      const score = (questionSimilarity * 0.65) + (answerSimilarity * 0.2) + (correctSimilarity * 0.1) + (subjectBonus * 0.05);

      if (score < 0.84) {
        continue;
      }

      pairs.push({
        similarity: Number((score * 100).toFixed(2)),
        differences: describeDifferences(left, right),
        left: {
          id: left.id,
          materia: left.materia,
          domanda: left.domanda,
          risposte: [left.rispostaCorretta, ...left.risposteErrate],
          rispostaCorretta: left.rispostaCorretta
        },
        right: {
          id: right.id,
          materia: right.materia,
          domanda: right.domanda,
          risposte: [right.rispostaCorretta, ...right.risposteErrate],
          rispostaCorretta: right.rispostaCorretta
        }
      });
    }
  }

  return pairs.sort((left, right) => right.similarity - left.similarity);
}

function toMarkdown(report) {
  const lines = [
    '# Audit banca dati TOLC-I',
    '',
    `Generato il ${report.generatedAt}.`,
    '',
    '## Riepilogo',
    '',
    `- Domande raw analizzate: ${report.summary.totalRawQuestions}`,
    `- Domande canoniche dopo deduplica logica: ${report.summary.totalCanonicalQuestions}`,
    `- Gruppi di duplicati certi: ${report.summary.totalExactDuplicateGroups}`,
    `- Copie ridondanti escluse dai nuovi quiz: ${report.summary.totalExactDuplicateRows}`,
    `- Coppie simili da revisionare manualmente: ${report.summary.similarPairs}`,
    '',
    '## Duplicati certi',
    ''
  ];

  report.exactDuplicates.forEach((group) => {
    lines.push(`### Canonica ${group.canonicalId}`);
    lines.push(`- Materia: ${group.materia}`);
    lines.push(`- ID coinvolti: ${group.allIds.join(', ')}`);
    lines.push(`- Risposta corretta: ${group.rispostaCorretta}`);
    lines.push(`- Testo: ${group.domanda}`);
    lines.push('');
  });

  lines.push('## Domande simili da revisionare');
  lines.push('');

  report.similarPairs.forEach((pair, index) => {
    lines.push(`### Caso ${index + 1} · Somiglianza ${pair.similarity}%`);
    lines.push(`- Domanda ${pair.left.id} (${pair.left.materia})`);
    lines.push(`  Testo: ${pair.left.domanda}`);
    lines.push(`  Corretta: ${pair.left.rispostaCorretta}`);
    lines.push(`- Domanda ${pair.right.id} (${pair.right.materia})`);
    lines.push(`  Testo: ${pair.right.domanda}`);
    lines.push(`  Corretta: ${pair.right.rispostaCorretta}`);
    lines.push(`- Differenze: ${pair.differences.join('; ') || 'nessuna differenza sostanziale rilevata automaticamente'}`);
    lines.push('');
  });

  return `${lines.join('\n')}\n`;
}

async function main() {
  const outputDir = path.resolve(process.cwd(), '..', '..', '..', 'outputs');
  await mkdir(outputDir, { recursive: true });

  const similarPairs = buildSimilarPairs();
  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      ...QUESTION_CATALOG_SUMMARY,
      similarPairs: similarPairs.length
    },
    exactDuplicates: getExactDuplicateGroups(),
    similarPairs
  };

  const jsonPath = path.join(outputDir, 'question-bank-audit-report.json');
  const markdownPath = path.join(outputDir, 'question-bank-audit-report.md');

  await writeFile(jsonPath, JSON.stringify(report, null, 2), 'utf8');
  await writeFile(markdownPath, toMarkdown(report), 'utf8');

  console.log(`Audit completato: ${markdownPath}`);
  console.log(`JSON dettagliato: ${jsonPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
