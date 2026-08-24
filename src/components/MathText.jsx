import katex from 'katex';
import { buildMathContent } from '../utils/mathContent.js';
import './MathText.css';

function renderLatex(latex) {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      strict: 'ignore',
      output: 'html',
      trust: false
    });
  } catch {
    return null;
  }
}

export default function MathText({
  text = '',
  as: Tag = 'span',
  className = '',
  preferWholeMath = false
}) {
  const segments = buildMathContent(text, { preferWholeMath });
  const hasFormula = segments.some((segment) => segment.type === 'math');
  const isBlock = Tag !== 'span';
  const wrapperClassName = [
    'math-text',
    isBlock ? 'math-text--block' : 'math-text--inline',
    hasFormula ? 'math-text--has-formula' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag className={wrapperClassName} aria-label={text}>
      {segments.map((segment, index) => {
        if (segment.type !== 'math') {
          return (
            <span key={`${segment.type}-${index}`} className="math-text__copy">
              {segment.content}
            </span>
          );
        }

        const markup = renderLatex(segment.content);
        if (!markup) {
          return (
            <span key={`${segment.type}-${index}`} className="math-text__copy">
              {segment.source || segment.content}
            </span>
          );
        }

        return (
          <span
            key={`${segment.type}-${index}`}
            className="math-text__formula"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        );
      })}
    </Tag>
  );
}
