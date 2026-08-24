// QuestionCard — Card della domanda con risposte
import AnswerOption from './AnswerOption.jsx';
import MathText from './MathText.jsx';
import './QuestionCard.css';

export default function QuestionCard({ question, currentAnswer, isLocked, onSelectAnswer }) {
  if (!question) return null;

  const hasImages = (question.shuffledOptions || []).some(opt => opt.image);
  const questionTextLength = String(question.domanda || '').length;
  const questionTextClassName = [
    'question-card__text',
    questionTextLength > 125 ? 'question-card__text--ultra-compact' : '',
    questionTextLength > 95 ? 'question-card__text--compact' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className="question-card">
      <div className="question-card__meta">
        <div className="question-card__materia-wrap">
          <div className="question-card__materia">
            {question.materia}
          </div>
          {question.daVerificare && (
            <div className="question-card__badge-warning">
              <span>⚠️</span> Quesito da verificare
            </div>
          )}
        </div>
        <span className="question-card__format">Risposta singola</span>
      </div>

      {/* Brano di riferimento (Q56-60) */}
      {question.brano && (
        <div className="question-card__passage">
          <div className="question-card__passage-header">
            <span className="question-card__passage-icon">📜</span>
            <span className="question-card__passage-title">{question.titoloBrano || 'Brano di riferimento'}</span>
          </div>
          <div className="question-card__passage-body">
            {question.brano.split('\n').map((paragraph, pIdx) => (
              <p key={pIdx} className="question-card__passage-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Testo domanda */}
      <MathText
        as="h2"
        className={questionTextClassName}
        text={question.domanda}
      />

      {/* Tabella dati (Q41) */}
      {question.tabella && (
        <div className="question-card__table-wrapper">
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

      {/* Opzioni di risposta */}
      <div className={`question-card__options ${hasImages ? 'question-card__options--grid' : ''}`}>
        {(question.shuffledOptions || []).map((option, optionIndex) => (
          <AnswerOption
            key={option.id}
            option={option}
            optionIndex={optionIndex}
            isSelected={currentAnswer?.selectedOptionId === option.id}
            isLocked={isLocked}
            answer={currentAnswer}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}
