import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Question({ question, index, totalQuestions, setScore, score }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const history = useHistory();

  const handleSubmit = () => {
    if (selectedOption === question.correctOption) {
      setScore(score + 1);
    }
    if (index + 1 < totalQuestions) {
      history.push(`/question/${index + 1}`);
    } else {
      history.push('/score');
    }
  };

  return (
    <div className="question-container">
      <h2>{question.text}</h2>
      <ul>
        {question.options.map((option, i) => (
          <li key={i} onClick={() => setSelectedOption(i)}>
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}

export default Question;
