import React, { useEffect, useState } from 'react'

function AnswerItem({ answer, answerState, onAnswerClick }) {
  const cls = []
  const [isChecked, setCheckedStatus] = useState(true)
  if (answerState){
    cls.push(answerState)
  }

  useEffect(() => {
    setCheckedStatus(false)
  })
  
  return (
    <p className={cls.join(' ')}>
    <label>
      <input checked={isChecked ? 'checked' : ''} type="radio" onChange={() => onAnswerClick(answer.id)}/>
      <span>{answer.text}</span>
    </label>
  </p>
  )
}

export default AnswerItem