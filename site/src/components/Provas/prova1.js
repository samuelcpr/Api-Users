import React, { useState } from 'react';

const Prova1 = () => {
  const questions = [
    'O que html',
    'O que é a tag <div>?',
    'O html é uma liguagem de programação',
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleAnswerChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // You can do something with the answers here, like sending them to a server or displaying them
    console.log('Submitted Answers:', answers);
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <form>
        {questions.map((question, index) => (
          <div key={index}>
            <label>{question}</label>
            <input
            style={{marginBottom:'25px'}}
              type="text"
              value={answers[index]}
              onChange={(event) => handleAnswerChange(index, event)}
            />
          </div>
        ))}
        <button type="button" onClick={handleSubmit} style={{width:'10%'}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Prova1;
