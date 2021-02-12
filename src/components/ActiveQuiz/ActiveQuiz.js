import React from 'react'
import AnswersList from '../AnswersList/AnswersList'

class ActiveQuiz extends React.Component {
  
  render(){
   
    return(
      <div>
        <h4> {this.props.question} </h4>
        <span>{this.props.activeNumber} из {this.props.quizLength} </span>
        <AnswersList 
          answers={this.props.answers}
          answerState={this.props.answerState}
          onAnswerClick={this.props.onAnswerClick}
        />
      </div>
    )
  }
}

export default ActiveQuiz