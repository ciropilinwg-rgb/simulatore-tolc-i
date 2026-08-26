import fs from 'fs';
import path from 'path';
import questionBank from '../data/questionBank.js';
import { calculateResults } from '../engine/scoring.js';
import { prepareShuffledOptions } from '../utils/shuffle.js';

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

section('Integrità Globale Banca 555 (con 65 da NEW Test1.pdf)');
check(questionBank.length === 555, `Totale quesiti esatto: 555 (trovati: ${questionBank.length})`);

const idSet = new Set();
let hasDuplicateId = false;
questionBank.forEach(q => {
  if (idSet.has(q.id)) hasDuplicateId = true;
  idSet.add(q.id);
});
check(!hasDuplicateId, 'Tutti gli ID sono strettamente univoci (nessun ID duplicato)');

const allowedSubjects = new Set(['Matematica', 'Logica', 'Scienze', 'Comprensione verbale']);
const invalidSubjects = questionBank.filter(q => !allowedSubjects.has(q.materia));
check(invalidSubjects.length === 0, 'Tutti i 555 quesiti appartengono esclusivamente alle 4 materie ammesse');

const subjectCounts = {};
questionBank.forEach(q => subjectCounts[q.materia] = (subjectCounts[q.materia] || 0) + 1);
check(subjectCounts['Matematica'] === 251, `Matematica fisica: 251 (118 base + 25 M1 + 25 M2 + 25 M3 + 25 M4 + 33 M5) (trovati: ${subjectCounts['Matematica']})`);
check(subjectCounts['Logica'] === 49, `Logica fisica: 49 (trovati: ${subjectCounts['Logica']})`);
check(subjectCounts['Scienze'] === 175, `Scienze fisica: 175 (70 base + 35 S1 + 35 S2 + 35 S3) (trovati: ${subjectCounts['Scienze']})`);
check(subjectCounts['Comprensione verbale'] === 80, `Comprensione verbale fisica: 80 (trovati: ${subjectCounts['Comprensione verbale']})`);

section('65 Quesiti NEW Test1.pdf');
const newTest1Questions = questionBank.filter(q => q.sourceDocument === 'NEW Test1.pdf');
check(newTest1Questions.length === 65, `Presenti esattamente 65 quesiti da NEW Test1.pdf (trovati: ${newTest1Questions.length})`);

const questionNumbers = new Set(newTest1Questions.map(q => q.sourceQuestionNumber));
check(questionNumbers.size === 65, 'Tutti i numeri di quesito da 1 a 65 sono presenti');

section('Q41 — Tabella dei Redditi');
const q41 = newTest1Questions.find(q => q.sourceQuestionNumber === 41);
check(Boolean(q41), 'Quesito 41 trovato');
check(Boolean(q41?.tabella), 'Q41 contiene la proprietà tabella');
check(Array.isArray(q41?.tabella?.headers) && q41.tabella.headers.length === 6, 'Q41 tabella ha 6 colonne di intestazione');
check(Array.isArray(q41?.tabella?.rows) && q41.tabella.rows.length === 1 && q41.tabella.rows[0].length === 6, 'Q41 tabella ha 1 riga dati con 6 celle');
check(q41?.tabella?.headers[1] === '≤ 10' && q41?.tabella?.rows[0][1] === '28%', 'Q41 dati percentuali fedeli');

section('Q42 — Grafici Cartesiani Vettoriali SVG');
const q42 = newTest1Questions.find(q => q.sourceQuestionNumber === 42);
check(Boolean(q42), 'Quesito 42 trovato');
check(Boolean(q42?.rispostaCorrettaImg), 'Q42 ha rispostaCorrettaImg');
check(Array.isArray(q42?.risposteErrateImg) && q42.risposteErrateImg.length === 4, 'Q42 ha 4 risposteErrateImg');

const publicImgDir = path.resolve(process.cwd(), 'public/images');
const svgFiles = ['q42_a.svg', 'q42_b.svg', 'q42_c.svg', 'q42_d.svg', 'q42_e.svg'];
const allSvgsExist = svgFiles.every(f => fs.existsSync(path.join(publicImgDir, f)));
check(allSvgsExist, 'Tutti i 5 file SVG (q42_a.svg ... q42_e.svg) esistono fisicamente in public/images/');

section('Q56–60 — Brano Condiviso');
const passageQuestions = newTest1Questions.filter(q => q.sourceQuestionNumber >= 56 && q.sourceQuestionNumber <= 60);
check(passageQuestions.length === 5, 'Tutti e 5 i quesiti (56, 57, 58, 59, 60) sono presenti');
check(passageQuestions.every(q => Boolean(q.brano) && q.brano.length > 500), 'Tutti e 5 i quesiti contengono integralmente il brano condiviso');
const firstBrano = passageQuestions[0].brano;
check(passageQuestions.every(q => q.brano === firstBrano), 'Il testo del brano è identico per tutti i quesiti 56-60');

section('Q58 — Neutralità e flag daVerificare');
const q58 = newTest1Questions.find(q => q.sourceQuestionNumber === 58);
check(Boolean(q58), 'Quesito 58 trovato');
check(q58?.daVerificare === true, 'Q58 ha il flag daVerificare: true');

const q58Prepared = {
  ...q58,
  shuffledOptions: prepareShuffledOptions(q58)
};
check(q58Prepared.shuffledOptions.every(opt => opt.daVerificare === true), 'Tutte le opzioni di Q58 hanno flag daVerificare');
check(q58Prepared.shuffledOptions.every(opt => opt.isCorrect === false), 'Nessuna opzione di Q58 è contrassegnata come corretta');

// Test scoring neutrality for Q58
const answersWithQ58 = {
  0: { selectedOptionId: q58Prepared.shuffledOptions[0].id, isVerified: true, isCorrect: false }
};
const resultsQ58 = calculateResults([q58Prepared], answersWithQ58);
check(resultsQ58.evaluableQuestions === 0, 'Q58 escluso dal totale domande valutabili');
check(resultsQ58.correct === 0, 'Q58 non attribuisce corrette');
check(resultsQ58.wrong === 0, 'Q58 non attribuisce errate');
check(resultsQ58.score === 0, 'Q58 punteggio 0 (nessuna penalità)');

console.log(`\nRisultato Integrazione NEW Test1: ${passed} test passati, ${failed} falliti.`);
if (failed > 0) {
  process.exit(1);
}
