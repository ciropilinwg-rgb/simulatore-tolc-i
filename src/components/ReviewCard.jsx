// ReviewCard — Card di revisione per singola domanda
import MathText from './MathText.jsx';
import './ReviewCard.css';

export default function ReviewCard({ detail, index }) {
  const { question, selectedText, selectedImage, correctText, correctImage, isUnanswered, daVerificare } = detail;

  let statusLabel = isUnanswered ? 'Non risposta' : 'Errata';
  let badgeModifier = isUnanswered ? 'review-card__badge--unanswered' : 'review-card__badge--wrong';
  let cardModifier = isUnanswered ? 'review-card--unanswered' : 'review-card--wrong';

  if (daVerificare) {
    statusLabel = 'Da verificare';
    badgeModifier = 'review-card__badge--warning';
    cardModifier = 'review-card--warning';
  }

  return (
    <article className={`review-card ${cardModifier}`}>
      <div className="review-card__top">
        <div className="review-card__meta">
          <span className="review-card__number">Domanda {index + 1}</span>
          <span className="review-card__materia">{question.materia}</span>
        </div>
        <span className={`review-card__badge ${badgeModifier}`}>
          {statusLabel}
        </span>
      </div>

      {/* Brano condiviso (Q56-60) */}
      {question.brano && (
        <details className="review-card__passage-details">
          <summary className="review-card__passage-summary">
            📜 Mostra/Nascondi brano di riferimento
          </summary>
          <div className="review-card__passage-content">
            {question.brano.split('\n').map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
        </details>
      )}

      {/* Testo domanda */}
      <MathText
        as="h2"
        className="review-card__question"
        text={question.domanda}
      />

      {/* Tabella dati (Q41) */}
      {question.tabella && (
        <div className="review-card__table-wrapper">
          <table className="quiz-table">
            <thead>
              <tr>
                {question.tabella.headers.map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {question.tabella.rows.map((row, rIdx) => (
                <tr key={rIdx}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="review-card__comparison">
        <div className={`review-card__answer ${isUnanswered ? 'review-card__answer--unanswered' : (daVerificare ? 'review-card__answer--info' : 'review-card__answer--wrong')}`}>
          <span className="review-card__answer-label">La tua risposta</span>
          <div className="review-card__answer-content">
            {selectedImage && (
              <div className="review-card__answer-image-box">
                <img src={selectedImage} alt={selectedText} className="review-card__answer-image" />
              </div>
            )}
            <p className="review-card__answer-text">
              {isUnanswered ? 'Non hai risposto' : <MathText text={selectedText} preferWholeMath />}
            </p>
          </div>
        </div>

        <div className={`review-card__answer ${daVerificare ? 'review-card__answer--warning' : 'review-card__answer--correct'}`}>
          <span className="review-card__answer-label">
            {daVerificare ? 'Stato del quesito' : 'Risposta corretta'}
          </span>
          <div className="review-card__answer-content">
            {correctImage && (
              <div className="review-card__answer-image-box">
                <img src={correctImage} alt={correctText} className="review-card__answer-image" />
              </div>
            )}
            <p className="review-card__answer-text">
              <MathText text={correctText} preferWholeMath />
            </p>
          </div>
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
