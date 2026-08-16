// ProgressBar — Barra di progresso del quiz

import './ProgressBar.css';

export default function ProgressBar({ current, total }) {
  const percentage = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-info">
        <span className="progress-bar-label">
          Domanda <strong>{current + 1}</strong> di <strong>{total}</strong>
        </span>
        <span className="progress-bar-percentage">{Math.round(percentage)}%</span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
