// ConfirmModal — Modale di conferma fine esercitazione

import './ConfirmModal.css';

export default function ConfirmModal({
  totalQuestions,
  answeredCount,
  unansweredCount,
  onConfirm,
  onCancel
}) {
  return (
    <div className="confirm-modal-overlay" onClick={onCancel}>
      <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="confirm-modal__title">Termina esercitazione?</h2>

        <div className="confirm-modal__summary">
          <div className="confirm-modal__row">
            <span>Domande totali</span>
            <strong>{totalQuestions}</strong>
          </div>
          <div className="confirm-modal__row">
            <span>Domande risposte</span>
            <strong>{answeredCount}</strong>
          </div>
          <div className="confirm-modal__row">
            <span>Domande senza risposta</span>
            <strong>{unansweredCount}</strong>
          </div>
        </div>

        {unansweredCount > 0 && (
          <div className="confirm-modal__warning">
            <span className="confirm-modal__warning-label">Attenzione</span>
            <span>
              {unansweredCount === 1
                ? 'Hai 1 domanda senza risposta!'
                : `Hai ${unansweredCount} domande senza risposta!`}
            </span>
          </div>
        )}

        <div className="confirm-modal__actions">
          <button
            className="btn btn--secondary"
            onClick={onCancel}
            type="button"
          >
            Torna al quiz
          </button>
          <button
            className="btn btn--primary"
            onClick={onConfirm}
            type="button"
          >
            Termina comunque
          </button>
        </div>
      </div>
    </div>
  );
}
