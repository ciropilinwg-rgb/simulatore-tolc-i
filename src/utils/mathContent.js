const INLINE_LATEX_REGEX = /\$([^$]+)\$/g;
const INLINE_LATEX_PRESENCE_REGEX = /\$[^$]+\$/;
const MATH_KEYWORD_REGEX = /\b(uguale|più|piu|meno|fratto|radice|seno|coseno|tangente|logaritmo|pi greco|alla seconda|alla terza|frazione|numeratore|denominatore|integrale|limite|minore|maggiore)\b/giu;
const PROSE_CUE_REGEX = /\b(quale|seguente|serve|deve|sapendo|indicare|quando|quanto|domanda|mettere|ordine|crescente|soluzione|soluzioni|valore|valori|volume|sorgente|oscillazioni|pendolo|sfere|profilo|banca dati)\b/giu;
const SYMBOLIC_MATH_REGEX = /[=<>≤≥√^_πλµρΩΩαβγΔ\\]/u;
const PHRASE_SPLIT_REGEX = /([:;?!\n])/u;

const FORMULA_PREFIX_PATTERNS = [
  { regex: /^(per quale dei seguenti valori di [A-Za-z] vale)\s+/iu },
  { regex: /^(per quale dei seguenti valori di [A-Za-z] si ha)\s+/iu },
  { regex: /^(è uguale a)\s+/iu },
  { regex: /^(è pari a)\s+/iu },
  { regex: /^(una quantità)\s+/iu },
  { regex: /^(la capacità equivalente è di)\s+/iu },
  { regex: /^(se e solo se)\s+/iu },
  { regex: /^(si ha)\s+/iu },
  { regex: /^(allora)\s+/iu },
  { regex: /^(solo per)\s+/iu },
  { regex: /^(per nessun valore reale di)\s+/iu },
  { regex: /^(per nessun valore di)\s+/iu },
  { regex: /^(si può misurare in)\s+/iu },
  { regex: /^(quanti sono i numeri reali [A-Za-z] che sono soluzioni dell['’]equazione)\s+/iu },
  { regex: /^(nel piano cartesiano, il luogo dei punti di coordinate\s*\([^)]*\)\s*che verificano l['’]equazione)\s+/iu },
  { regex: /^(dato un numero reale [A-Za-z],\s*la seguente relazione)\s+/iu, forceMath: true },
  { regex: /^(l['’]equazione trigonometrica)\s+/iu },
  { regex: /^(l['’]equazione)\s+/iu },
  { regex: /^(la disequazione)\s+/iu },
  { regex: /^(il polinomio)\s+/iu, forceMath: true },
  { regex: /^(l['’]espressione)\s+/iu, forceMath: true },
  { regex: /^(le soluzioni dell['’]equazione trigonometrica)\s+/iu },
  { regex: /^(le soluzioni dell['’]equazione)\s+/iu },
  { regex: /^(mettere in ordine crescente i tre numeri)\s+/iu, forceMath: true },
  { regex: /^(dato un numero reale [A-Za-z],\s*la seguente frazione)\s+/iu, forceMath: true }
];

const FORMULA_SUFFIX_PATTERNS = [
  { regex: /\s+(è uguale a|valgono|vale|sono|è divisibile per)\s*$/iu, forceMath: true },
  { regex: /,\s*(per ogni valore intero di [A-Za-z])$/iu },
  { regex: /\s+(è anche uguale a)$/iu },
  { regex: /\s+(è verificata per)$/iu },
  { regex: /\s+(coincide con)$/iu },
  { regex: /\s+(ha)$/iu },
  { regex: /\s+(si scrive)$/iu },
  { regex: /\s+(gradi|radianti|angoli retti|angoli piatti)$/iu },
  { regex: /\s+(per ogni(?: valore intero di)? [A-Za-z](?:\s+intero)?)$/iu },
  { regex: /\s+(volte quella prevista)$/iu }
];

function createTextSegment(text) {
  if (!text) {
    return null;
  }

  return {
    type: 'text',
    content: text
  };
}

function createMathSegment(latex, source) {
  if (!latex) {
    return createTextSegment(source);
  }

  return {
    type: 'math',
    content: latex,
    source
  };
}

function normalizePlainText(text) {
  return String(text || '')
    .replace(/\r\n?/g, '\n')
    .replace(/\u00a0/g, ' ')
    .replace(/\s+([,.;:!?])/gu, '$1')
    .replace(/([(\[{])\s+/gu, '$1')
    .replace(/\s+([)\]}])/gu, '$1')
    .replace(/[ \t]{2,}/g, ' ');
}

function normalizeLatex(text) {
  return String(text || '')
    .replace(/[−–]/g, '-')
    .replace(/×/g, '\\cdot ')
    .replace(/÷/g, '/')
    .replace(/µ/g, '\\mu ')
    .replace(/Ω|Ω/g, '\\Omega ')
    .replace(/π/g, '\\pi ')
    .replace(/λ/g, '\\lambda ')
    .replace(/ρ/g, '\\rho ')
    .replace(/≤/g, '\\le ')
    .replace(/≥/g, '\\ge ')
    .replace(/√\s*([A-Za-z0-9]+)/g, '\\sqrt{$1}')
    .replace(/10\^\(([-−]?\d+)\)/g, '10^{$1}')
    .replace(/\bcm\^2\b/g, '\\mathrm{cm}^2')
    .replace(/\bcm\^3\b/g, '\\mathrm{cm}^3')
    .replace(/\bm\^2\b/g, '\\mathrm{m}^2')
    .replace(/\bm\^3\b/g, '\\mathrm{m}^3')
    .replace(/\bkg\b/g, '\\mathrm{kg}')
    .replace(/\bgal\b/g, '\\mathrm{gal}')
    .replace(/\bV\b/g, '\\mathrm{V}')
    .replace(/\bW\b/g, '\\mathrm{W}')
    .replace(/\bA\b/g, '\\mathrm{A}')
    .replace(/\bC\b/g, '\\mathrm{C}')
    .replace(/\bJ\b/g, '\\mathrm{J}')
    .replace(/\bH_2O\b/g, 'H_2O')
    .replace(/\bCa\(OH\)_2\b/g, 'Ca(OH)_2')
    .replace(/\bCaO\b/g, 'CaO')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeInnerExpression(text) {
  return convertSpokenMathToLatex(text)
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeOperatorSpacing(text) {
  return text
    .replace(/\s*([=+\-<>])\s*/g, ' $1 ')
    .replace(/\s*\\cdot\s*/g, ' \\cdot ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isStandaloneMathToken(value) {
  return /^(?:\d+(?:[.,]\d+)?|[A-Za-z](?:_[0-9]+)?|\\[A-Za-z]+|\([^()]+\)|\{[^{}]+\})$/u.test(value);
}

function replaceMathMultiplicationWord(text) {
  return text.replace(
    /(?<!\p{L})(\d+(?:[.,]\d+)?|[A-Za-z](?:_[0-9]+)?|\\[A-Za-z]+|\)|\})\s+per\s+(?=(\d+(?:[.,]\d+)?|[A-Za-z](?:_[0-9]+)?|\\[A-Za-z]+|\())/gu,
    (match, left, right) => {
      if (!isStandaloneMathToken(left) || !isStandaloneMathToken(right)) {
        return match;
      }

      return `${left} \\cdot `;
    }
  );
}

function wrapTrailingMathText(text) {
  return text
    .replace(/(\d|\\pi|\}|\\sqrt\{[^}]+\}|\))\s+(gradi|radianti)\b/giu, '$1 \\, \\text{$2}')
    .replace(/(\d|\\pi|\}|\\sqrt\{[^}]+\}|\))\s+(angoli retti|angoli piatti)\b/giu, '$1 \\, \\text{$2}')
    .replace(/(\d|\\pi|\}|\\sqrt\{[^}]+\}|\))\s+(metri|metro|secondi|minuti|ore|anni|volte)\b/giu, '$1 \\, \\text{$2}')
    .replace(/\\mu\s+F\b/gu, '\\mu\\,\\text{F}');
}

function convertImplicitPiFractions(text) {
  return text.replace(
    /(?<!\\frac\{)((?:-?\d+\s*)?(?:[A-Za-z](?:_[0-9]+)?\s*)?(?:\\sqrt\{[^}]+\}\s*)?\\pi)\s+([0-9]+)\b/gu,
    (_, numerator, denominator) => `\\frac{${numerator.replace(/\s+/g, ' ').trim()}}{${denominator}}`
  );
}

function shouldStayPlainText(text) {
  const normalized = normalizePlainText(text).trim();
  if (!normalized) {
    return true;
  }

  const wordCount = normalized.split(/\s+/u).filter(Boolean).length;
  const hasDigits = /\d/u.test(normalized);
  const hasSymbolicMath = SYMBOLIC_MATH_REGEX.test(normalized);
  const hasStandaloneVariable = /\b[xyzabcknpr]\b/iu.test(normalized);
  const hasExplicitLatex = INLINE_LATEX_PRESENCE_REGEX.test(normalized);

  if (hasExplicitLatex) {
    return false;
  }

  if (wordCount >= 5 && !hasDigits && !hasSymbolicMath && !hasStandaloneVariable) {
    return true;
  }

  if (
    wordCount >= 5
    && !hasDigits
    && !/[=<>^_\\]/u.test(normalized)
    && !/\b(log(?:aritmo)?|sin(?:o)?|cos(?:eno)?|tan(?:gente)?|radice|fratto|pi greco|alla seconda|alla terza)\b/iu.test(normalized)
  ) {
    return true;
  }

  if (
    /^(?:il suo|la sua|non è|direttamente|inversamente|tutte le|una quantità|la reazione|questo significa che|l’equazione di una circonferenza|l['’]equazione di una circonferenza)/iu.test(normalized)
  ) {
    return true;
  }

  if (/\b(più grande|più piccolo|divisibile per|passano per il punto|può essere|opportunamente bilanciata|fattori di conversione)\b/iu.test(normalized)) {
    return true;
  }

  return false;
}

function hasStrongFormulaCue(text) {
  const normalized = normalizePlainText(text).trim();
  if (!normalized) {
    return false;
  }

  return (
    INLINE_LATEX_PRESENCE_REGEX.test(normalized)
    || /[=<>≤≥√^_]/u.test(normalized)
    || /\b(log(?:aritmo)?|sin(?:o)?|cos(?:eno)?|tan(?:gente)?|fratto|radice|pi greco|alla seconda|alla terza|integrale|limite)\b/iu.test(normalized)
    || (/\d/u.test(normalized) && /\b[xyzabcknprLCRf]\b/iu.test(normalized))
    || (/\b[xyzabcknprLCRf]\b/iu.test(normalized) && /\b(uguale|minore|maggiore|più|piu|meno)\b/iu.test(normalized))
    || /\b([prf]\([a-z]\)|[rk]_[0-9]+)\b/iu.test(normalized)
  );
}

function convertSimpleFraction(text) {
  const match = text.match(/^(.+?)\s+fratto\s+(.+)$/iu);
  if (!match) {
    return null;
  }

  const numerator = match[1].trim();
  const denominator = match[2].trim();

  if (!numerator || !denominator) {
    return null;
  }

  if (/\b(uguale|minore|maggiore)\b/iu.test(numerator) || /[=<>]/u.test(numerator)) {
    return null;
  }

  return `\\frac{${normalizeInnerExpression(numerator)}}{${normalizeInnerExpression(denominator)}}`;
}

function convertStructuredFraction(text) {
  const match = text.match(/(?:la seguente frazione\s*:?\s*)?numeratore\s*:\s*(.+?)\s+denominatore\s*:\s*(.+)$/iu);
  if (!match) {
    return null;
  }

  return `\\frac{${normalizeInnerExpression(match[1])}}{${normalizeInnerExpression(match[2])}}`;
}

function replaceEmbeddedFractions(text) {
  return text.replace(/(.+?)\s+fratto\s+(.+)/iu, (match, numerator, denominator) => {
    if (!numerator?.trim() || !denominator?.trim()) {
      return match;
    }

    if (/\b(uguale|minore|maggiore)\b/iu.test(numerator) || /[=<>]/u.test(numerator)) {
      return match;
    }

    return `\\frac{${normalizeInnerExpression(numerator)}}{${normalizeInnerExpression(denominator)}}`;
  });
}

function convertSpokenMathToLatex(text) {
  const normalized = normalizeLatex(text);
  if (!normalized) {
    return normalized;
  }

  const structuredFraction = convertStructuredFraction(normalized);
  if (structuredFraction) {
    return normalizeOperatorSpacing(structuredFraction);
  }

  let next = normalized;

  const simpleFraction = convertSimpleFraction(next);
  if (simpleFraction) {
    return normalizeOperatorSpacing(simpleFraction);
  }

  next = next
    .replace(/pi greco mezzi/giu, '\\frac{\\pi}{2}')
    .replace(/pi greco terzi/giu, '\\frac{\\pi}{3}')
    .replace(/pi greco quarti/giu, '\\frac{\\pi}{4}')
    .replace(/pi greco sesti/giu, '\\frac{\\pi}{6}')
    .replace(/pi greco/giu, '\\pi')
    .replace(/un mezzo/giu, '\\frac{1}{2}')
    .replace(/un terzo/giu, '\\frac{1}{3}')
    .replace(/sqrt\(([^()]+)\)/giu, (_, inner) => `\\sqrt{${normalizeInnerExpression(inner)}}`)
    .replace(/radice cubica di\s*\(([^()]+)\)/giu, (_, inner) => `\\sqrt[3]{${normalizeInnerExpression(inner)}}`)
    .replace(/radice cubica di\s+([A-Za-z0-9]+)/giu, (_, inner) => `\\sqrt[3]{${inner}}`)
    .replace(/radice quadrata di\s*\(([^()]+)\)/giu, (_, inner) => `\\sqrt{${normalizeInnerExpression(inner)}}`)
    .replace(/radice quadrata di\s+([A-Za-z0-9]+)/giu, (_, inner) => `\\sqrt{${inner}}`)
    .replace(/radice di\s*\(([^()]+)\)/giu, (_, inner) => `\\sqrt{${normalizeInnerExpression(inner)}}`)
    .replace(/radice di\s+([A-Za-z0-9]+)/giu, (_, inner) => `\\sqrt{${inner}}`)
    .replace(/([A-Za-z0-9]+)\^\(([^)]+)\)/gu, (_, base, exponent) => `${base}^{${normalizeInnerExpression(exponent)}}`)
    .replace(/coseno alla seconda di\s+([A-Za-z](?:_[0-9]+)?|\([^()]+\))/giu, (_, value) => `\\cos^2(${normalizeInnerExpression(value)})`)
    .replace(/tangente alla seconda di\s+([A-Za-z](?:_[0-9]+)?|\([^()]+\))/giu, (_, value) => `\\tan^2(${normalizeInnerExpression(value)})`)
    .replace(/coseno di\s+([A-Za-z](?:_[0-9]+)?|\([^()]+\))/giu, (_, value) => `\\cos(${normalizeInnerExpression(value)})`)
    .replace(/tangente di\s+([A-Za-z](?:_[0-9]+)?|\([^()]+\))/giu, (_, value) => `\\tan(${normalizeInnerExpression(value)})`)
    .replace(/seno alla seconda di\s+([A-Za-z](?:_[0-9]+)?|\([^()]+\))/giu, (_, value) => `\\sin^2(${normalizeInnerExpression(value)})`)
    .replace(/seno di\s+([A-Za-z](?:_[0-9]+)?|\([^()]+\))/giu, (_, value) => `\\sin(${normalizeInnerExpression(value)})`)
    .replace(/(\b(?:[A-Za-z](?:_[0-9]+)?|\d+|\([^()]+\)|\{[^{}]+\}))\s+alla\s+\(([^)]+)\)/giu, (_, base, exponent) => `${base}^{${normalizeInnerExpression(exponent)}}`)
    .replace(/(\b(?:[A-Za-z](?:_[0-9]+)?|\d+|\([^()]+\)|\{[^{}]+\}))\s+alla seconda/giu, '$1^2')
    .replace(/(\b(?:[A-Za-z](?:_[0-9]+)?|\d+|\([^()]+\)|\{[^{}]+\}))\s+alla terza/giu, '$1^3')
    .replace(/(\b(?:[A-Za-z](?:_[0-9]+)?|\d+|\([^()]+\)|\{[^{}]+\}))\s+alla\s+([0-9]+|[A-Za-z](?:_[0-9]+)?)/giu, '$1^{$2}')
    .replace(/sin\(([^)]+)\)/giu, (_, value) => `\\sin(${normalizeInnerExpression(value)})`)
    .replace(/cos\(([^)]+)\)/giu, (_, value) => `\\cos(${normalizeInnerExpression(value)})`)
    .replace(/tan\(([^)]+)\)/giu, (_, value) => `\\tan(${normalizeInnerExpression(value)})`)
    .replace(/log\(([^)]+)\)/giu, (_, value) => `\\log(${normalizeInnerExpression(value)})`)
    .replace(/logaritmo in base 10 di\s*\(([^()]+)\)/giu, (_, value) => `\\log_{10}(${normalizeInnerExpression(value)})`)
    .replace(/logaritmo in base 10 di\s+([A-Za-z0-9]+)/giu, (_, value) => `\\log_{10}(${value})`)
    .replace(/logaritmo di\s*\(([^()]+)\)/giu, (_, value) => `\\log(${normalizeInnerExpression(value)})`)
    .replace(/logaritmo di\s+([A-Za-z0-9]+)/giu, (_, value) => `\\log(${value})`)
    .replace(/maggiore o uguale(?: a| di)?/giu, '\\ge')
    .replace(/minore o uguale(?: a| di)?/giu, '\\le')
    .replace(/maggiore di/giu, '>')
    .replace(/minore di/giu, '<')
    .replace(/(?<!\p{L})maggiore(?!\p{L})/giu, '>')
    .replace(/(?<!\p{L})minore(?!\p{L})/giu, '<')
    .replace(/(?<!\p{L})uguale(?!\p{L})/giu, '=')
    .replace(/(?<!\p{L})più(?!\p{L})/giu, '+')
    .replace(/(?<!\p{L})piu(?!\p{L})/giu, '+')
    .replace(/(?<!\p{L})meno(?!\p{L})/giu, '-')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/\{\s+/g, '{')
    .replace(/\s+\}/g, '}')
    .replace(/\s+/g, ' ')
    .trim();

  next = replaceMathMultiplicationWord(next);
  next = convertImplicitPiFractions(next);
  next = replaceEmbeddedFractions(next);
  next = wrapTrailingMathText(next);

  return normalizeOperatorSpacing(next);
}

function splitExplicitLatex(text) {
  const parts = [];
  let cursor = 0;

  while (cursor < text.length) {
    const start = text.indexOf('$', cursor);
    if (start === -1) {
      parts.push(createTextSegment(text.slice(cursor)));
      break;
    }

    const end = text.indexOf('$', start + 1);
    if (end === -1) {
      parts.push(createTextSegment(text.slice(cursor)));
      break;
    }

    const candidate = text.slice(start + 1, end);
    const normalizedCandidate = candidate.trim();
    const wordCount = normalizedCandidate.split(/\s+/u).filter(Boolean).length;
    const looksLikeInlineLatex = (
      /^\d+(?:[.,]\d+)?$/u.test(normalizedCandidate)
      || /^[A-Z]$/u.test(normalizedCandidate)
      || /^[A-Za-z]$/u.test(normalizedCandidate)
      || /^[A-Z][A-Za-z0-9]*$/u.test(normalizedCandidate)
      || /^[A-Za-z](?:_[A-Za-z0-9+\-]+)$/u.test(normalizedCandidate)
      || /^[A-Za-z]+\([^)]*\)$/u.test(normalizedCandidate)
      || /^\([^()]+\)$/u.test(normalizedCandidate)
      || /^[A-Za-z](?:_[0-9]+)?\s*:\s*.+$/u.test(normalizedCandidate)
      || /\\[A-Za-z]+|[=<>≤≥√^_+\-*/]|[αβγΔλµρπΩΩ]/u.test(normalizedCandidate)
      || /\b(?:sin|cos|tan|log|sqrt|pi|lambda|mu|forall|in|mathbb)\b/u.test(normalizedCandidate)
      || (wordCount <= 4 && /\d/u.test(normalizedCandidate) && /[A-Za-z]/u.test(normalizedCandidate))
    );

    if (!looksLikeInlineLatex) {
      parts.push(createTextSegment(text.slice(cursor, end + 1)));
      cursor = end + 1;
      continue;
    }

    if (start > cursor) {
      parts.push(createTextSegment(text.slice(cursor, start)));
    }

    parts.push(createMathSegment(candidate, `$${candidate}$`));
    cursor = end + 1;
  }

  return parts.filter(Boolean);
}

function splitFormulaAffixes(text) {
  let prefix = '';
  let suffix = '';
  let core = text.trim();
  let forcedMath = false;

  for (const pattern of FORMULA_PREFIX_PATTERNS) {
    const match = core.match(pattern.regex);
    if (!match) {
      continue;
    }

    prefix = `${match[1]} `;
    core = core.slice(match[0].length).trim();
    forcedMath = forcedMath || Boolean(pattern.forceMath);
    break;
  }

  for (const pattern of FORMULA_SUFFIX_PATTERNS) {
    const match = core.match(pattern.regex);
    if (!match) {
      continue;
    }

    suffix = match[0];
    core = core.slice(0, -match[0].length).trim();
    forcedMath = forcedMath || Boolean(pattern.forceMath);
    break;
  }

  return { prefix, core, suffix, forcedMath };
}

function getMathConfidence(text) {
  const normalized = text.trim();
  if (!normalized) {
    return 0;
  }

  let score = 0;
  const keywordMatches = normalized.match(MATH_KEYWORD_REGEX) || [];
  const proseMatches = normalized.match(PROSE_CUE_REGEX) || [];
  const wordCount = normalized.split(/\s+/u).filter(Boolean).length;

  score += keywordMatches.length * 2;
  score -= proseMatches.length;

  if (SYMBOLIC_MATH_REGEX.test(normalized)) {
    score += 4;
  }

  if (/\d/u.test(normalized) && /\b[xyzabckprId]\b/iu.test(normalized)) {
    score += 2;
  }

  if (/\b(H_2O|Ca\(OH\)_2|CaO)\b/u.test(normalized)) {
    score += 4;
  }

  if (/(numeratore|denominatore|fratto|radice|seno|coseno|tangente|logaritmo|pi greco|alla seconda|alla terza)/iu.test(normalized)) {
    score += 3;
  }

  if (wordCount > 10) {
    score -= Math.ceil((wordCount - 10) / 2);
  }

  return score;
}

function buildFormulaSegments(text, options = {}) {
  const normalized = normalizePlainText(text);
  const explicitSegments = splitExplicitLatex(normalized);

  return explicitSegments.flatMap((segment) => {
    if (segment.type === 'math') {
      return segment;
    }

    const structuredFraction = convertStructuredFraction(segment.content);
    if (structuredFraction) {
      return createMathSegment(structuredFraction, segment.content);
    }

    const parts = segment.content.split(PHRASE_SPLIT_REGEX);
    const built = [];

    parts.forEach((part) => {
      if (!part) {
        return;
      }

      const { prefix, core, suffix, forcedMath } = splitFormulaAffixes(part);
      const confidence = getMathConfidence(core);
      const keepAsPlainText = shouldStayPlainText(core);
      const forcedMathEligible = forcedMath && hasStrongFormulaCue(core) && !keepAsPlainText;
      const shouldRenderMath = core
        && (
          forcedMathEligible
          || (!keepAsPlainText && confidence >= (options.preferWholeMath ? 3 : 5))
        );

      if (!shouldRenderMath) {
        built.push(createTextSegment(part));
        return;
      }

      if (prefix) {
        built.push(createTextSegment(prefix));
      }

      built.push(createMathSegment(convertSpokenMathToLatex(core), core));

      if (suffix) {
        built.push(createTextSegment(suffix));
      }
    });

    return built.filter(Boolean);
  }).filter(Boolean);
}

export function hasRenderableMath(text = '') {
  return getMathConfidence(normalizePlainText(text)) >= 3 || INLINE_LATEX_PRESENCE_REGEX.test(text);
}

export function buildMathContent(text = '', options = {}) {
  const normalized = normalizePlainText(text);
  if (!normalized.trim()) {
    return [];
  }

  if (!hasRenderableMath(normalized)) {
    return [createTextSegment(normalized)];
  }

  const segments = buildFormulaSegments(normalized, options);
  return segments.length > 0 ? segments : [createTextSegment(normalized)];
}
