// AnswerOption — Singola opzione di risposta

import MathText from './MathText.jsx';
import './AnswerOption.css';

function getVerifiedState(option, answer) {
  if (!answer || !answer.isVerified) return null;

  if (answer.selectedOptionId === option.id) {
    return option.isCorrect ? 'correct' : 'wrong';
  }

  if (option.isCorrect && !answer.isCorrect) return 'revealed';

  return null;
}

export default function AnswerOption({
  option,
  optionIndex = 0,
  isSelected,
  isLocked,
  answer,
  onSelect
}) {
  const verifiedState = getVerifiedState(option, answer);
  const optionLabel = String.fromCharCode(65 + optionIndex);

  const handleClick = () => {
    if (isLocked) return;
    onSelect(option.id);
  };

  let className = 'answer-option';
  if (isSelected && !verifiedState) className += ' answer-option--selected';
  if (isLocked) className += ' answer-option--locked';
  if (verifiedState === 'correct') className += ' answer-option--correct';
  if (verifiedState === 'wrong') className += ' answer-option--wrong';
  if (verifiedState === 'revealed') className += ' answer-option--revealed';

  let stateLabel = '';
  if (verifiedState === 'correct') stateLabel = 'Corretta';
  if (verifiedState === 'wrong') stateLabel = 'Errata';
  if (verifiedState === 'revealed') stateLabel = 'Corretta';

  return (
    <button
      className={className}
      onClick={handleClick}
      disabled={isLocked}
      type="button"
      aria-disabled={isLocked}
      aria-pressed={isSelected}
    >
      <span className="answer-option__marker">{optionLabel}</span>
      <span className="answer-option__content">
        <MathText
          className="answer-option__text"
          text={option.text}
          preferWholeMath
        />
      </span>
      {stateLabel && <span className="answer-option__status">{stateLabel}</span>}
    </button>
  );
}
