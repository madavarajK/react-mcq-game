import React from 'react';

function Score({ score }) {
  return (
    <div className="score-container">
      <h1>Your Score: {score}</h1>
    </div>
  );
}

export default Score;
