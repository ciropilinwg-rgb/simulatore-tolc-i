// ReviewCard — Card di revisione per singola domanda

import MathText from './MathText.jsx';
import './ReviewCard.css';

export default function ReviewCard({ detail, index }) {
  const { question, selectedText, correctText, isUnanswered } = detail;
  const statusLabel = isUnanswered ? 'Non risposta' : 'Errata';

  return (
    <article className={`review-card ${isUnanswered ? 'review-card--unanswered' : 'review-card--wrong'}`}>
      <div className="review-card__top">
        <div className="review-card__meta">
          <span className="review-card__number">Domanda {index + 1}</span>
          <span className="review-card__materia">{question.materia}</span>
        </div>
        <span className={`review-card__badge ${isUnanswered ? 'review-card__badge--unanswered' : 'review-card__badge--wrong'}`}>
          {statusLabel}
        </span>
      </div>

      <MathText
        as="h2"
        className="review-card__question"
        text={question.domanda}
      />

      <div className="review-card__comparison">
        <div className={`review-card__answer ${isUnanswered ? 'review-card__answer--unanswered' : 'review-card__answer--wrong'}`}>
          <span className="review-card__answer-label">La tua risposta</span>
          <p className="review-card__answer-text">
            {isUnanswered ? 'Non hai risposto' : <MathText text={selectedText} preferWholeMath />}
          </p>
        </div>

        <div className="review-card__answer review-card__answer--correct">
          <span className="review-card__answer-label">Risposta corretta</span>
          <p className="review-card__answer-text">
            <MathText text={correctText} preferWholeMath />
          </p>
        </div>
      </div>

      {question.spiegazione && (
        <div className="review-card__explanation">
          <div>
            <span className="review-card__explanation-label">Spiegazione</span>
            <p className="review-card__explanation-text">{question.spiegazione}</p>
          </div>
        </div>
      )}

      <div className="review-card__foot">
        <span className="review-card__foot-label">Fonte</span>
        <span className="review-card__foot-value">{question.fonte}</span>
      </div>
    </article>
  );
}
