import React, { useState } from 'react'
import apiService from '../../services/firebase/apiService'
import CyrillicToTranslit from 'cyrillic-to-translit-js'

function AddQuizCategory() {
  const [input, setInput] = useState({})
  const [urlInput, setUrlInput] = useState('')
  

  function handleFieldChange(event){
    input[event.target.name] = event.target.value;
    const urlInput = new CyrillicToTranslit().transform(event.target.value)

    setUrlInput(urlInput)
    setInput(input)
  }

  function handleSubmitForm() {
    const data = {
      id: Date.now(),
      url: urlInput,
      name: input['category']
    }

    
    if (!data.name){
      alert(`Пожалуйста, укажите название категории!`)
    } else {
      apiService.addQuizeCategory(data)
    }
    
  }

  return (
    <div className="row">
      <div className="container">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s12">
            
            <input
              placeholder="URL"
              name="url"
              type="text"
              value={urlInput}
              readOnly
            />

            <input 
              placeholder="Категория"
              name="category"
              onChange={handleFieldChange}
              type="text"
              className="validate" 
            />
              <label htmlFor="question"></label>
            </div>
          </div>
          <a href="#!" className="waves-effect waves-light btn" onClick={handleSubmitForm}>Добавить</a>
        </form>
    </div>
  </div>
  )
}

export default AddQuizCategory