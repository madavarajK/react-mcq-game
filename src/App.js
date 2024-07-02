import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Question from './Question';
import Score from './Score';
import questions from './questions'; // Assuming you have a questions.js file with your questions

function App() {
  const [score, setScore] = useState(0);

  return (
    <Router>
      <div className="App">
        <Switch>
          {questions.map((question, index) => (
            <Route key={index} path={`/question/${index}`}>
              <Question 
                question={question} 
                index={index} 
                totalQuestions={questions.length} 
                setScore={setScore} 
                score={score} 
              />
            </Route>
          ))}
          <Route path="/score">
            <Score score={score} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
