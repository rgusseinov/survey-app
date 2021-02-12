import React from 'react'
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz'

class Quiz extends React.Component {
  constructor(){
    super()
    
    this.state = {
      answerState: null,
      activeQuestion: 0,
      quiz:[
        { 
          id:1, 
          question: 'В каком году появился интернет в Казахстане', 
          rightAnswerId: 3,
          answers:[
            {text: 'В 1990', id: 1}, {text: 'В 1992', id: 2}, 
            {text: 'В 1994', id: 3}, {text: 'В 1994', id: 4}
          ]
        },
        { 
          id:2,
          question: 'Вопрос 222',
          rightAnswerId: 3,
          answers:[
            {text: '1', id: 1}, {text: '2', id: 2}, 
            {text: '3', id: 3}, {text: '4', id: 4}
          ]
        },
        { id:3, 
          question: 'Вопрос 333',
          rightAnswerId: 1, 
          answers:[
            {text: 'Один', id: 1}, {text: 'Семь', id: 2}, 
            {text: 'Пять', id: 3}, {text: 'Сорок', id: 4}
          ]
        },
      ]
    }
  }

  answerClickHandler = (answerId) => {

    const rightAnswerId = this.state.quiz[this.state.activeQuestion].rightAnswerId
    if (rightAnswerId === answerId){

      // for correct answers
      this.setState({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {
        
        if (this.isQuizFinished()){
          console.log(`Finished`)
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }

        window.clearTimeout(timeout)
      }, 1000)

    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })

      // [5]: 'error'
    }

  }

  isQuizFinished(){
    return this.state.quiz.length === this.state.activeQuestion + 1
  }

  render(){
    return(
      <div className="container">
      <div className="row">
        <div className="col s9">
          <h5>Тестирование по IT</h5>
          <ActiveQuiz
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion]}
            quizLength={this.state.quiz.length}
            activeNumber={this.state.activeQuestion + 1}
            answerState={this.state.answerState}
            onAnswerClick={this.answerClickHandler}
          />
        </div>
      </div>
    </div>
    )
  }
}

export default Quiz