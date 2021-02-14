import React from 'react'
import AnswersList from '../AnswersList/AnswersList'

function ActiveQuiz({ question, activeNumber, quizLength, answers, answerState, onAnswerClick }){

    return(
      <div>
        <h4> {question} </h4>
        <span>{activeNumber} из {quizLength} </span>
        <AnswersList 
          answers={answers}
          answerState={answerState}
          onAnswerClick={onAnswerClick}
        />
      </div>
    )
}

export default ActiveQuiz