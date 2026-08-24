// ConfigPage — Schermata di configurazione esercitazione (v2)

import { useEffect, useMemo, useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import {
  DEFAULT_QUESTION_COUNT,
  SELECTION_MODES,
  SELECTION_MODE_LABELS,
  SELECTION_MODE_DESCRIPTIONS
} from '../engine/quizEngine.js';
import './ConfigPage.css';

const MODES_ORDER = [
  SELECTION_MODES.RANDOM,
  SELECTION_MODES.HIGHEST_ERROR_RATE,
  SELECTION_MODES.LEAST_PRACTICED
];

export default function ConfigPage() {
  const { allQuestions, availableMaterie, isLoading, startQuiz, goHome } = useQuiz();

  // ── Stato locale ──
  const [selectedMaterie, setSelectedMaterie] = useState(() => [...availableMaterie]);
  const [questionCountInput, setQuestionCountInput] = useState(() => String(DEFAULT_QUESTION_COUNT));
  const [selectionMode, setSelectionMode] = useState(SELECTION_MODES.RANDOM);
  const [startError, setStartError] = useState('');
  const [hasCustomizedMaterieSelection, setHasCustomizedMaterieSelection] = useState(false);

  // ── Calcoli derivati ──

  const resolvedSelectedMaterie = useMemo(() => (
    !hasCustomizedMaterieSelection && selectedMaterie.length === 0 && availableMaterie.length > 0
      ? availableMaterie
      : selectedMaterie
  ), [availableMaterie, hasCustomizedMaterieSelection, selectedMaterie]);

  const materiaCountMap = useMemo(() => {
    const map = {};
    allQuestions.forEach(q => {
      map[q.materia] = (map[q.materia] || 0) + 1;
    });
    return map;
  }, [allQuestions]);

  const filteredCount = useMemo(() => {
    if (resolvedSelectedMaterie.length === 0) return 0;
    return allQuestions.filter(q => resolvedSelectedMaterie.includes(q.materia)).length;
  }, [allQuestions, resolvedSelectedMaterie]);

  const questionCount = parseInt(questionCountInput, 10);
  const isValidNumber = !isNaN(questionCount) && questionCount > 0;
  const hasMaterie = resolvedSelectedMaterie.length > 0;
  const isWithinBounds = isValidNumber && questionCount <= filteredCount;
  const hasMode = !!selectionMode;
  const isFormValid = hasMaterie && isValidNumber && isWithinBounds && filteredCount > 0 && hasMode;
  const selectedModeLabel = SELECTION_MODE_LABELS[selectionMode];
  const selectedModeDescription = SELECTION_MODE_DESCRIPTIONS[selectionMode];

  let validationMessage = '';
  if (hasMaterie && questionCountInput !== '' && !isValidNumber) {
    validationMessage = 'Il numero delle domande deve essere un intero maggiore di zero.';
  } else if (hasMaterie && questionCountInput !== '' && !isWithinBounds) {
    validationMessage = `Il numero richiesto supera le ${filteredCount} domande disponibili.`;
  }

  const isBootLoading = isLoading && allQuestions.length === 0;

  useEffect(() => {
    if (hasCustomizedMaterieSelection || selectedMaterie.length > 0 || availableMaterie.length === 0) {
      return;
    }

    setSelectedMaterie([...availableMaterie]);
  }, [availableMaterie, hasCustomizedMaterieSelection, selectedMaterie.length]);

  // ── Gestori eventi ──

  const handleToggleMateria = (materia) => {
    setStartError('');
    setHasCustomizedMaterieSelection(true);
    setSelectedMaterie(prev =>
      prev.includes(materia)
        ? prev.filter(m => m !== materia)
        : [...prev, materia]
    );
  };

  const handleSelectAll = () => {
    setStartError('');
    setHasCustomizedMaterieSelection(true);
    setSelectedMaterie([...availableMaterie]);
  };

  const handleDeselectAll = () => {
    setStartError('');
    setHasCustomizedMaterieSelection(true);
    setSelectedMaterie([]);
  };

  const handleQuestionCountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setStartError('');
      setQuestionCountInput(value);
    }
  };

  const handleStart = async () => {
    if (!isFormValid) return;
    setStartError('');

    try {
      await startQuiz(questionCount, resolvedSelectedMaterie, selectionMode);
    } catch (error) {
      const code = String(error?.code || '');
      const isPermissionIssue = code === 'PERMISSION_DENIED' || code === 'EMAIL_NOT_VERIFIED';

      setStartError(
        isPermissionIssue
          ? 'La sessione protetta non e ancora pronta. Ricarica la pagina oppure esci e accedi di nuovo, poi riprova.'
          : (error?.message || 'Non riesco ad avviare l’esercitazione in questo momento.')
      );
    }
  };

  // ── Render ──

  if (isBootLoading) {
    return (
      <div className="config-page">
        <div className="config-page__loading">
          <div className="config-page__spinner" aria-hidden="true"></div>
          <div>
            <p className="config-page__loading-title">Preparazione ambiente</p>
            <p className="config-page__loading-text">Sto caricando la banca dati TOLC-I.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="config-page">
      <div className="config-page__container">
        <div className="config-page__header">
          <div className="config-page__header-copy">
            <button className="btn btn--ghost config-page__back-btn" onClick={goHome} type="button">
              Torna alla home
            </button>
            <p className="eyebrow">Impostazione sessione</p>
            <h1 className="config-page__title">Configura la tua esercitazione</h1>
            <p className="config-page__subtitle">
              Scegli il perimetro della sessione, definisci la quantità di domande
              e imposta il criterio con cui vuoi estrarle.
            </p>
          </div>
        </div>

        <div className="config-page__workspace">
          <section className="config-page__panel config-page__panel--main page-card">
            <section className="config-section">
              <div className="config-section__heading">
                <div>
                  <p className="config-section__eyebrow">Materie</p>
                  <h2 className="config-section__title">Definisci il campo di lavoro</h2>
                </div>

                <div className="config-materie__actions">
                  <button
                    className="btn btn--secondary config-materie__action-btn"
                    onClick={handleSelectAll}
                    type="button"
                  >
                    Seleziona tutte
                  </button>
                  <button
                    className="btn btn--ghost config-materie__action-btn"
                    onClick={handleDeselectAll}
                    type="button"
                  >
                    Azzera selezione
                  </button>
                </div>
              </div>

              <div className="config-materie__list">
                {availableMaterie.map(materia => {
                  const isSelected = resolvedSelectedMaterie.includes(materia);

                  return (
                    <label
                      key={materia}
                      className={`config-materia-checkbox ${isSelected ? 'config-materia-checkbox--selected' : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleToggleMateria(materia)}
                      />
                      <span className="config-materia-checkbox__check" aria-hidden="true"></span>
                      <span className="config-materia-checkbox__copy">
                        <span className="config-materia-checkbox__label">{materia}</span>
                        <span className="config-materia-checkbox__count">
                          {materiaCountMap[materia] || 0} quesiti
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>

              {!hasMaterie && (
                <p className="config-section__hint">Seleziona almeno una materia per abilitare il resto della configurazione.</p>
              )}
            </section>

            <section className="config-section">
              <div className="config-section__heading">
                <div>
                  <p className="config-section__eyebrow">Quantità</p>
                  <h2 className="config-section__title">Scegli quante domande affrontare</h2>
                </div>
              </div>

              <div className="config-number">
                <label className="config-number__label" htmlFor="questionCountInput">
                  Numero di domande
                </label>
                <input
                  id="questionCountInput"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={questionCountInput}
                  onChange={handleQuestionCountChange}
                  placeholder={filteredCount > 0 ? `Da 1 a ${filteredCount}` : 'Seleziona prima le materie'}
                  className={`config-number__input ${validationMessage ? 'config-number__input--error' : ''}`}
                  disabled={!hasMaterie}
                />
                <p className="config-number__helper">
                  Disponibili con la selezione corrente: <strong>{filteredCount}</strong>
                </p>
              </div>

              {validationMessage && (
                <p className="config-section__error">{validationMessage}</p>
              )}
            </section>

            <section className="config-section">
              <div className="config-section__heading">
                <div>
                  <p className="config-section__eyebrow">Criterio</p>
                  <h2 className="config-section__title">Decidi come estrarre le domande</h2>
                </div>
              </div>

              <div className="config-modes">
                {MODES_ORDER.map((mode, index) => (
                  <label
                    key={mode}
                    className={`config-mode-card ${selectionMode === mode ? 'config-mode-card--selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name="selectionMode"
                      value={mode}
                      checked={selectionMode === mode}
                      onChange={() => {
                        setStartError('');
                        setSelectionMode(mode);
                      }}
                    />
                    <span className="config-mode-card__index" aria-hidden="true">
                      {`0${index + 1}`}
                    </span>
                    <span className="config-mode-card__copy">
                      <span className="config-mode-card__title">
                        {SELECTION_MODE_LABELS[mode]}
                      </span>
                      <span className="config-mode-card__desc">
                        {SELECTION_MODE_DESCRIPTIONS[mode]}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </section>
          </section>

          <aside className="config-page__panel config-page__panel--summary page-card">
            <div className="config-summary">
              <div className="config-summary__intro">
                <p className="config-section__eyebrow">Riepilogo</p>
                <h2 className="config-summary__title">Sessione pronta</h2>
                <p className="config-summary__text">
                  Tutte le scelte vengono aggiornate in tempo reale prima di avviare il quiz.
                </p>
              </div>

              <dl className="config-summary__stats">
                <div className="config-summary__stat">
                  <dt>Materie selezionate</dt>
                  <dd>{resolvedSelectedMaterie.length}</dd>
                </div>
                <div className="config-summary__stat">
                  <dt>Quesiti disponibili</dt>
                  <dd>{filteredCount}</dd>
                </div>
                <div className="config-summary__stat">
                  <dt>Quesiti richiesti</dt>
                  <dd>{questionCountInput === '' ? '—' : questionCountInput}</dd>
                </div>
              </dl>

              {resolvedSelectedMaterie.length > 0 && (
                <div className="config-summary__subjects">
                  {resolvedSelectedMaterie.map(materia => (
                    <span key={materia} className="config-summary__subject">
                      {materia}
                    </span>
                  ))}
                </div>
              )}

              <div className="config-summary__mode">
                <span className="config-summary__mode-label">Modalità attiva</span>
                <strong>{selectedModeLabel}</strong>
                <p>{selectedModeDescription}</p>
              </div>

              {startError ? (
                <div className="config-summary__error">
                  {startError}
                </div>
              ) : null}

              <button
                className="btn btn--primary btn--large config-page__start-btn"
                onClick={handleStart}
                disabled={!isFormValid || isLoading}
                type="button"
              >
                {isLoading ? 'Avvio in corso...' : 'Avvia esercitazione'}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
