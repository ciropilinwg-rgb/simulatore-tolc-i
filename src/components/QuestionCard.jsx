// QuestionCard — Card della domanda con risposte

import AnswerOption from './AnswerOption.jsx';
import './QuestionCard.css';

export default function QuestionCard({ question, currentAnswer, isLocked, onSelectAnswer }) {
  if (!question) return null;

  return (
    <div className="question-card">
      <div className="question-card__meta">
        <div className="question-card__materia">
          {question.materia}
        </div>
        <span className="question-card__format">Risposta singola</span>
      </div>

      <h2 className="question-card__text">{question.domanda}</h2>

      <div className="question-card__options">
        {question.shuffledOptions.map((option, optionIndex) => (
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
