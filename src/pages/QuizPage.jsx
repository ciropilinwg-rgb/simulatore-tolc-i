// QuizPage — Schermata del quiz (v3)

import { useQuiz } from '../context/QuizContext.jsx';
import { SELECTION_MODE_LABELS } from '../engine/quizEngine.js';
import ProgressBar from '../components/ProgressBar.jsx';
import QuestionCard from '../components/QuestionCard.jsx';
import MathText from '../components/MathText.jsx';
import './QuizPage.css';

export default function QuizPage() {
  const {
    questions,
    currentIndex,
    currentQuestion,
    currentAnswer,
    isCurrentVerified,
    isFirstQuestion,
    isLastQuestion,
    correctCount,
    wrongCount,
    remainingCount,
    selectionMode,
    syncIssue,
    selectAnswer,
    verifyAnswer,
    goNext,
    goPrev,
    finishQuiz
  } = useQuiz();

  const hasSelection = currentAnswer?.selectedOptionId !== null && currentAnswer?.selectedOptionId !== undefined;
  const canVerify = hasSelection && !isCurrentVerified;
  const canGoNext = isCurrentVerified && !isLastQuestion;
  const canFinish = isCurrentVerified && isLastQuestion;
  const modeLabel = SELECTION_MODE_LABELS[selectionMode] || selectionMode;

  let helperMessage = 'Seleziona una risposta per sbloccare la verifica.';
  if (hasSelection && !isCurrentVerified) {
    helperMessage = 'Conferma la tua scelta per vedere subito l’esito.';
  } else if (canGoNext) {
    helperMessage = 'Risposta verificata. Puoi procedere alla domanda successiva.';
  } else if (canFinish) {
    helperMessage = 'Ultimo passaggio completato. Puoi chiudere la sessione.';
  }

  return (
    <div className="quiz-page">
      <div className="quiz-page__layout">
        <aside className="quiz-page__sidebar">
          <div className="quiz-page__sidebar-panel page-card">
            <p className="quiz-page__sidebar-eyebrow">Avanzamento</p>
            <ProgressBar current={currentIndex} total={questions.length} />

            <dl className="quiz-page__stats">
              <div className="quiz-page__stat">
                <dt>Corrette</dt>
                <dd>{correctCount}</dd>
              </div>
              <div className="quiz-page__stat">
                <dt>Errate</dt>
                <dd>{wrongCount}</dd>
              </div>
              <div className="quiz-page__stat">
                <dt>Rimanenti</dt>
                <dd>{remainingCount}</dd>
              </div>
            </dl>

            <div className="quiz-page__mode-card">
              <span>Modalità attiva</span>
              <strong>{modeLabel}</strong>
            </div>

            <p className="quiz-page__hint">{helperMessage}</p>
          </div>
        </aside>

        <section className="quiz-page__panel page-card">
          <header className="quiz-page__panel-header">
            <div>
              <p className="quiz-page__panel-kicker">Quesito corrente</p>
              <h1 className="quiz-page__panel-title">
                {isLastQuestion ? 'Ultima domanda della sessione' : 'Concentra la risposta su un solo esito'}
              </h1>
            </div>
            <div className="quiz-page__panel-badge">
              {currentIndex + 1}/{questions.length}
            </div>
          </header>

          <div className="quiz-page__question-area">
            <QuestionCard
              question={currentQuestion}
              currentAnswer={currentAnswer}
              isLocked={isCurrentVerified}
              onSelectAnswer={selectAnswer}
            />
          </div>

          {isCurrentVerified && (
            <div className={`quiz-feedback ${currentAnswer.isCorrect ? 'quiz-feedback--correct' : 'quiz-feedback--wrong'}`}>
              {currentAnswer.isCorrect ? (
                <p className="quiz-feedback__message">Risposta corretta. Puoi procedere.</p>
              ) : (
                <>
                  <p className="quiz-feedback__message">Risposta non corretta.</p>
                  <div className="quiz-feedback__correct-answer">
                    <span className="quiz-feedback__correct-label">Risposta corretta</span>
                    <MathText
                      as="span"
                      className="quiz-feedback__correct-text"
                      text={currentQuestion.rispostaCorretta}
                      preferWholeMath
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {syncIssue ? (
            <div className="quiz-page__sync-issue" role="status" aria-live="polite">
              {syncIssue}
            </div>
          ) : null}

          <div className="quiz-page__navigation">
            <div className="quiz-page__nav-slot">
              {!isFirstQuestion && (
                <button className="btn btn--secondary" onClick={goPrev} type="button">
                  Precedente
                </button>
              )}
            </div>

            <div className="quiz-page__nav-actions">
              {canVerify && (
                <button className="btn btn--primary" onClick={verifyAnswer} type="button">
                  Conferma risposta
                </button>
              )}

              {canGoNext && (
                <button className="btn btn--primary" onClick={goNext} type="button">
                  Domanda successiva
                </button>
              )}

              {canFinish && (
                <button className="btn btn--finish" onClick={finishQuiz} type="button">
                  Termina esercitazione
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
