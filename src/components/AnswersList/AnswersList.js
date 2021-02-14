import React from 'react'
import AnswerItem from '../AnswersItem/AnswersItem'

function AnswersList({ answers, answerState, onAnswerClick }){
  return (
    answers.answers.map((answer, index) =>
    <AnswerItem
      key={index}
      answer={answer}
      answerState={answerState ? answerState[answer.id]: null}
      onAnswerClick={onAnswerClick}
    />)
  )
  
}

export default AnswersList