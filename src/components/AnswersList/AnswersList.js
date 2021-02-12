import React from 'react'
import AnswerItem from '../AnswersItem/AnswersItem'

class AnswersList extends React.Component {


  render(){
    const answers = this.props.answers.answers
        
    return(
      <div>
       {
          answers.map((answer,index) =>
          <AnswerItem
            key={index}
            answer={answer}
            answerState={this.props.answerState ? this.props.answerState[answer.id]: null}
            onAnswerClick={this.props.onAnswerClick}
          />)
        }
      </div>
    )
  }
}

export default AnswersList