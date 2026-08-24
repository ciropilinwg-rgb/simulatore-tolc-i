// QuestionCard — Card della domanda con risposte

import AnswerOption from './AnswerOption.jsx';
import MathText from './MathText.jsx';
import './QuestionCard.css';

export default function QuestionCard({ question, currentAnswer, isLocked, onSelectAnswer }) {
  if (!question) return null;

  const questionTextLength = String(question.domanda || '').length;
  const questionTextClassName = [
    'question-card__text',
    questionTextLength > 125 ? 'question-card__text--ultra-compact' : '',
    questionTextLength > 95 ? 'question-card__text--compact' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className="question-card">
      <div className="question-card__meta">
        <div className="question-card__materia">
          {question.materia}
        </div>
        <span className="question-card__format">Risposta singola</span>
      </div>

      <MathText
        as="h2"
        className={questionTextClassName}
        text={question.domanda}
      />

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
