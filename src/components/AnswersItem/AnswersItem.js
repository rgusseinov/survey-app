import React from 'react'

function AnswerItem({ answer, answerState, onAnswerClick }) {
  const cls = []
  if (answerState){
    cls.push(answerState)
  }
  return (
    <p className={cls.join(' ')}>
    <label>
      <input name="group1" type="radio" onChange={() => onAnswerClick(answer.id)}/>
      <span>{answer.text}</span>
    </label>
  </p>
  )
}

export default AnswerItem