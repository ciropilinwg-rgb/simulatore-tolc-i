// ResultsSummary — Riepilogo risultati con grafico circolare

import { useEffect, useState } from 'react';
import './ResultsSummary.css';

export default function ResultsSummary({ results }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const performanceLevel =
    results.percentage >= 80 ? 'high' : results.percentage >= 60 ? 'medium' : 'low';
  const performanceMessage =
    performanceLevel === 'high'
      ? 'Hai mantenuto un livello molto solido lungo tutta la sessione.'
      : performanceLevel === 'medium'
        ? 'Hai una buona base: la revisione finale ti aiuta a consolidare i passaggi meno stabili.'
        : 'La revisione è il punto di ripartenza più utile per rafforzare il risultato.';
  const scoreLabel =
    performanceLevel === 'high'
      ? 'Ritmo solido'
      : performanceLevel === 'medium'
        ? 'Base buona'
        : 'Da consolidare';

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(results.percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [results.percentage]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div className={`results-summary results-summary--${performanceLevel}`}>
      <div className="results-summary__hero">
        <div className="results-summary__intro">
          <p className="results-summary__eyebrow">Sessione conclusa</p>
          <h1 className="results-summary__title">Esercitazione completata</h1>
          <p className="results-summary__lead">{performanceMessage}</p>
        </div>

        <div className="results-summary__chart">
          <svg width="180" height="180" viewBox="0 0 180 180" aria-hidden="true">
            <circle
              cx="90" cy="90" r={radius}
              fill="none"
              stroke="var(--color-rule)"
              strokeWidth="10"
            />
            <circle
              cx="90" cy="90" r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 90 90)"
              style={{ strokeDashoffset }}
            />
          </svg>
          <div className="results-summary__chart-label">
            <span className="results-summary__percentage">{results.percentage}%</span>
            <span className="results-summary__percentage-sub">corrette</span>
          </div>
        </div>
      </div>

      <dl className="results-summary__stats">
        <div className="results-summary__stat">
          <dt className="results-summary__stat-label">Totali</dt>
          <dd className="results-summary__stat-value">{results.total}</dd>
        </div>
        <div className="results-summary__stat">
          <dt className="results-summary__stat-label">Corrette</dt>
          <dd className="results-summary__stat-value">{results.correct}</dd>
        </div>
        <div className="results-summary__stat">
          <dt className="results-summary__stat-label">Errate</dt>
          <dd className="results-summary__stat-value">{results.wrong}</dd>
        </div>
        <div className="results-summary__stat">
          <dt className="results-summary__stat-label">Non risposte</dt>
          <dd className="results-summary__stat-value">{results.unanswered}</dd>
        </div>
      </dl>

      <div className="results-summary__score">
        <div>
          <span className="results-summary__score-label">Punteggio</span>
          <span className="results-summary__score-value">
            {results.score} / {results.maxScore}
          </span>
        </div>
        <span className="results-summary__score-note">{scoreLabel}</span>
      </div>
    </div>
  );
}
