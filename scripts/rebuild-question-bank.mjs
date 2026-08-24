import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getCanonicalQuestions } from '../src/data/questionCatalog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputPath = path.join(projectRoot, 'src', 'data', 'questionBank.js');

function toQuestionRecord(question, nextId) {
  return {
    id: nextId,
    materia: question.materia,
    domanda: question.domanda,
    rispostaCorretta: question.rispostaCorretta,
    risposteErrate: Array.isArray(question.risposteErrate)
      ? [...question.risposteErrate]
      : [],
    spiegazione: question.spiegazione || '',
    fonte: question.fonte || '',
    numeroVolteProposta: 0,
    numeroRisposteCorrette: 0,
    numeroRisposteErrate: 0
  };
}

function buildQuestionBankFile(questions) {
  const payload = JSON.stringify(questions, null, 2);

  return [
    '// Banca dati TOLC-I — deduplicata e normalizzata per l’app multiutente',
    '// Rigenerata automaticamente dal catalogo canonico locale.',
    '// Ogni domanda attiva ha un ID univoco progressivo e non conserva lo storico di test precedente.',
    '',
    `const questionBank = ${payload};`,
    '',
    'export default questionBank;',
    ''
  ].join('\n');
}

async function main() {
  const canonicalQuestions = getCanonicalQuestions();
  const rebuilt = canonicalQuestions.map((question, index) => toQuestionRecord(question, index + 1));
  const content = buildQuestionBankFile(rebuilt);

  await writeFile(outputPath, content, 'utf8');

  console.log(`Banca dati rigenerata con ${rebuilt.length} domande uniche in ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
