// ResultsPage — Schermata dei risultati

import { useQuiz } from '../context/QuizContext.jsx';
import { SELECTION_MODE_LABELS } from '../engine/quizEngine.js';
import ResultsSummary from '../components/ResultsSummary.jsx';
import './ResultsPage.css';

export default function ResultsPage() {
  const { results, selectionMode, showReview, goToConfig, goHome } = useQuiz();

  if (!results) return null;

  const hasReviewItems = results.wrong > 0 || results.unanswered > 0;
  const modeLabel = SELECTION_MODE_LABELS[selectionMode] || selectionMode;
  const reviewCount = results.wrong + results.unanswered;
  const nextStepTitle = hasReviewItems
    ? 'Hai ancora materiale utile da consolidare.'
    : 'Hai completato la sessione senza elementi da rivedere.';
  const nextStepText = hasReviewItems
    ? `La revisione raccoglie ${reviewCount} quesiti su cui tornare con priorità.`
    : 'Puoi avviare subito una nuova esercitazione con la stessa banca dati.';

  return (
    <div className="results-page">
      <div className="results-page__layout">
        <section className="results-page__panel results-page__panel--summary page-card">
          <ResultsSummary results={results} />
        </section>

        <aside className="results-page__panel results-page__panel--aside page-card">
          <div className="results-page__intro">
            <p className="results-page__eyebrow">Lettura rapida</p>
            <h2 className="results-page__heading">{nextStepTitle}</h2>
            <p className="results-page__text">{nextStepText}</p>
          </div>

          <dl className="results-page__facts">
            <div className="results-page__fact">
              <dt>Modalità utilizzata</dt>
              <dd>{modeLabel}</dd>
            </div>
            <div className="results-page__fact">
              <dt>Da rivedere</dt>
              <dd>{reviewCount}</dd>
            </div>
            <div className="results-page__fact">
              <dt>Corrette</dt>
              <dd>{results.correct}</dd>
            </div>
          </dl>

          <div className="results-page__actions">
            {hasReviewItems && (
              <button
                className="btn btn--secondary btn--large"
                onClick={showReview}
                type="button"
              >
                Apri revisione
              </button>
            )}
            <button
              className="btn btn--primary btn--large"
              onClick={goToConfig}
              type="button"
            >
              Nuova esercitazione
            </button>
            <button
              className="btn btn--ghost"
              onClick={goHome}
              type="button"
            >
              Torna alla home
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
