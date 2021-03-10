import React, { useEffect, useState } from 'react'
import apiService from '../../services/firebase/apiService'

function QuizResult({ totalCorrectAnswers, quizLength }) {
  
   useEffect(() => {
    apiService.addResult({
      name: "Ruslan", 
      score: totalCorrectAnswers,
      total: quizLength
    })
  })


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