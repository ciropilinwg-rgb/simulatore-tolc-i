const COMBINING_MARKS_REGEX = /[\u0300-\u036f]/g;
const NON_BREAKING_SPACE_REGEX = /\u00a0/g;
const WHITESPACE_REGEX = /\s+/g;

export function stripDiacritics(value = '') {
  return String(value)
    .normalize('NFKD')
    .replace(COMBINING_MARKS_REGEX, '');
}

export function normalizeComparableText(value = '') {
  return stripDiacritics(value)
    .replace(NON_BREAKING_SPACE_REGEX, ' ')
    .replace(WHITESPACE_REGEX, ' ')
    .trim()
    .toLowerCase();
}

export function normalizeAnswerSet(question) {
  return [
    normalizeComparableText(question?.rispostaCorretta),
    ...(Array.isArray(question?.risposteErrate) ? question.risposteErrate : []).map(normalizeComparableText)
  ].sort();
}

export function buildQuestionSignature(question) {
  return JSON.stringify({
    materia: normalizeComparableText(question?.materia),
    domanda: normalizeComparableText(question?.domanda),
    rispostaCorretta: normalizeComparableText(question?.rispostaCorretta),
    risposte: normalizeAnswerSet(question)
  });
}
