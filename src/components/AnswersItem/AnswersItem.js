import React from 'react'

class AnswerItem extends React.Component {
  
  
  render(){
    const cls = []
    const answer = this.props.answer
    
    if (this.props.answerState){      
      cls.push(this.props.answerState)
    }

    // console.log(cls)
        
    return(
      <p className={cls.join(' ')}>
        <label>
          <input name="group1" type="radio" onChange={() => this.props.onAnswerClick(answer.id)}/>
          <span>{answer.text}</span>
        </label>
      </p>
    )
  }
}

export default AnswerItem