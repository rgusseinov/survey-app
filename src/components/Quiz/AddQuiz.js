import React from 'react'
import apiService from '../../services/firebase/apiService'
import Select from '../Select'

class AddQuiz extends React.Component {

  constructor(options){
    super(options)

    this.state = {
      input: {},
      error: {}
    }
  }

  handleFieldChange = (event) => {
    const input = this.state.input
    input[event.target.name] = event.target.value;
    
    this.setState({
      input
    })
  }

  formValidation(){
    const error = {}
    const input = this.state.input
    let isValid = true

    if (!input['question']){
      isValid = false
      error['question'] = 'Пожалуйста, введите вопрос!'
    }

    if (!input['answerA']){
      isValid = false
      error['answerA'] = 'Укажите ответ А'
    }
    
    if (!input['answerB']){
      isValid = false
      error['answerB'] = 'Укажите ответ B'
    }

    if (!input['answerС']){
      isValid = false
      error['answerС'] = 'Укажите ответ C'
    }

    if (!input['answerD']){
      isValid = false
      error['answerD'] = 'Укажите ответ D'
    }

    if (!input['rightAnswerId']){
      isValid = false
      error['rightAnswerId'] = 'Укажите правильный ответ'
    }


    this.setState({
      error
    })

    return isValid
  }

  handleSubmitForm = (e) => {
    e.preventDefault()
    if (this.formValidation()){
      const input = this.state.input

      const data = {
        id: Date.now(),
        rightAnswerId: input['rightAnswerId'], 
        question: input['question'],
        category: input['category'],
        answers:[
          {text: input['answerA'], id: 1}, {text: input['answerB'], id: 2}, 
          {text: input['answerС'], id: 3}, {text: input['answerD'], id: 4}
        ]
      }

      apiService.addQuize(data)
      console.log(`Data added`, data)
      
    }

  }

  render(){
    const error = this.state.error

    return (
      <div className="row">
        <div className="container">
          <form className="col s6">

          <div className="row">
              <div className="input-field col s6">
                <Select handleFieldChange={this.handleFieldChange} />
              </div>
              { error.category }
            </div>


            <div className="row">
              <div className="input-field col s12">
                <input placeholder="Вопрос" name="question" onChange={this.handleFieldChange} type="text" className="validate" />
                <label htmlFor="question"></label>
              </div>
              { error.question }
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Ответ 1" name="answerA" onChange={this.handleFieldChange} type="text" className="validate" />
                <label htmlFor="answerA"></label>
              </div>
              { error.answerA }
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Ответ 2" name="answerB" onChange={this.handleFieldChange} type="text" className="validate" />
                <label htmlFor="answerB"></label>
              </div>
              { error.answerB }
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Ответ 3" name="answerС" onChange={this.handleFieldChange} type="text" className="validate" />
                <label htmlFor="answerC"></label>
              </div>
              { error.answerС }
            </div>

            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Ответ 4" name="answerD" onChange={this.handleFieldChange} type="text" className="validate" />
                <label htmlFor="answerD"></label>
              </div>
              { error.answerD }
            </div>

            <div className="row">
              <div className="input-field col s6">
              <select className="browser-default" onChange={this.handleFieldChange} name="rightAnswerId">
                <option value="1">Ответ 1</option>
                <option value="2">Ответ 2</option>
                <option value="3">Ответ 3</option>
                <option value="4">Ответ 4</option>
              </select>
              </div>
              { error.rightAnswerId }
            </div>

            <a href="#!" className="waves-effect waves-light btn" onClick={this.handleSubmitForm}>Добавить вопрос</a>
          </form>
      </div>
    </div>
    )
  }
}

export default AddQuiz