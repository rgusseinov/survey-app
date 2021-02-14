import React from 'react'
import apiService from '../../services/firebase/apiService'
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz'
import Loader from '../Loader'
import QuizResult from './QuizResult'
// import { db } from '../../services/firebase'


class Quiz extends React.Component {
  constructor(options){
    super(options)
    this.activeCategory = this.props.activeCategory
    this.state = {
      answerState: null,
      activeQuestion: 0,
      totalCorrectAnswers: 0,
      isFinished: false,
      isQuizLoaded: false,
      quiz:[]
    }
  }

  async componentDidMount(){
    const data = await apiService.getQuize()
    this.setState({ quiz: data, isQuizLoaded: true })
  }

  answerClickHandler = (answerId) => {
    const rightAnswerId = this.state.quiz[this.state.activeQuestion].rightAnswerId

    if (rightAnswerId === answerId){
      // for correct answers
      this.setState({
        answerState: {[answerId]: 'success'},
        totalCorrectAnswers: this.state.totalCorrectAnswers + 1
      })
    } else {

      this.setState({
        answerState: {[answerId]: 'error'}
      })

    }

    const timeout = window.setTimeout(() => {
      
      if (this.isQuizFinished()){
        
        this.setState({
          isFinished: true
        })


      } else {
        this.setState({
          activeQuestion: this.state.activeQuestion + 1,
          answerState: null
        })
      }

      window.clearTimeout(timeout)
    }, 1000)

  

  }

  isQuizFinished(){
    return this.state.quiz.length === this.state.activeQuestion + 1
  }

  render(){
    // console.log(`question`, this.state.quiz)

    return(
      <div className="container">
      <div className="row">
        <div className="col s9">
          <h5>Тестирование по IT:</h5>
          {
            !this.state.isQuizLoaded ? <Loader /> :
            this.state.isFinished ?
            <QuizResult
              totalCorrectAnswers={this.state.totalCorrectAnswers}
              quizLength={this.state.quiz.length}
            /> :
            this.state.quiz.length ?
            <ActiveQuiz
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion]}
              quizLength={this.state.quiz.length}
              activeNumber={this.state.activeQuestion + 1}
              answerState={this.state.answerState}
              onAnswerClick={this.answerClickHandler}
            /> : null
          }
        </div>
      </div>
    </div>
    )
  }
}

export default Quiz