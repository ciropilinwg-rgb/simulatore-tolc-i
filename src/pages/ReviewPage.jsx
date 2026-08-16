// ReviewPage — Schermata di revisione errori e non risposte

import { useQuiz } from '../context/QuizContext.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import './ReviewPage.css';

export default function ReviewPage() {
  const { results, goHome } = useQuiz();

  if (!results) return null;

  const reviewItems = results.details.filter(
    detail => !detail.isCorrect || detail.isUnanswered
  );
  const unansweredCount = reviewItems.filter(detail => detail.isUnanswered).length;
  const wrongCount = reviewItems.length - unansweredCount;

  return (
    <div className="review-page">
      <div className="review-page__container">
        <div className="review-page__header">
          <div>
            <p className="review-page__eyebrow">Revisione mirata</p>
            <h1 className="review-page__title">Rivedi i quesiti da consolidare</h1>
          </div>
          <p className="review-page__subtitle">
            Domande errate e non risposte ({reviewItems.length} su {results.total})
          </p>
        </div>

        <div className="review-page__stats">
          <div className="review-page__stat">
            <span>Errate</span>
            <strong>{wrongCount}</strong>
          </div>
          <div className="review-page__stat">
            <span>Non risposte</span>
            <strong>{unansweredCount}</strong>
          </div>
          <div className="review-page__stat">
            <span>Corrette</span>
            <strong>{results.correct}</strong>
          </div>
        </div>

        <div className="review-page__list">
          {reviewItems.map((detail) => (
            <ReviewCard
              key={detail.questionIndex}
              detail={detail}
              index={detail.questionIndex}
            />
          ))}
        </div>

        <div className="review-page__actions">
          <button
            className="btn btn--primary btn--large"
            onClick={goHome}
            type="button"
          >
            Torna alla home
          </button>
        </div>
      </div>
    </div>
  );
}
