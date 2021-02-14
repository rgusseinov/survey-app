import React from 'react'

function QuizResult({ totalCorrectAnswers, quizLength }) {

  return (
    <div>
      <h3> Результаты тестование </h3>
      <br/>
      <label>
        <input type="checkbox" checked="checked" onChange={() => {}} />
        <span>Правильные ответы { totalCorrectAnswers } из { quizLength }</span>
      </label>
      <br/>
      <a href="/"> Попробовать снова </a>
    </div>
  )
}

export default QuizResult