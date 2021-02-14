import React, { useState } from 'react'
// import { db } from '../../services/firebase'
import apiService from '../../services/firebase/apiService'

function AddQuiz() {
  const [input, setInput] = useState({})

  function handleFieldChange(event){
    input[event.target.name] = event.target.value;
    setInput(input)
  }

  function handleSubmitForm() {

    const data = {
      id: Date.now(),
      rightAnswerId: input['rightAnswerId'], 
      question: input['question'],
      answers:[
        {text: input['answerA'], id: 1}, {text: input['answerB'], id: 2}, 
        {text: input['answerС'], id: 3}, {text: input['answerD'], id: 4}
      ]
    }
        
    apiService.addQuize(data)
  }

  return (
    <div className="row">
      <div className="container">
        <form className="col s6">

          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Вопрос" name="question" onChange={handleFieldChange} type="text" className="validate" />
              <label htmlFor="question"></label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Ответ 1" name="answerA" onChange={handleFieldChange} type="text" className="validate" />
              <label htmlFor="answerA"></label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Ответ 2" name="answerB" onChange={handleFieldChange} type="text" className="validate" />
              <label htmlFor="answerB"></label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Ответ 3" name="answerС" onChange={handleFieldChange} type="text" className="validate" />
              <label htmlFor="answerA"></label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Ответ 4" name="answerD" onChange={handleFieldChange} type="text" className="validate" />
              <label htmlFor="answerC"></label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
            <select className="browser-default" onChange={handleFieldChange} name="rightAnswerId">
              <option value="" disabled>Выберите правильный ответ</option>
              <option value="1">Ответ 1</option>
              <option value="2">Ответ 2</option>
              <option value="3">Ответ 3</option>
              <option value="4">Ответ 4</option>
            </select>
            </div>
          </div>

          <a href="#!" className="waves-effect waves-light btn" onClick={handleSubmitForm}>Добавить вопрос</a>
        </form>
    </div>
  </div>
  )
}

export default AddQuiz