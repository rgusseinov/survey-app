import React, { useState } from 'react'
import apiService from '../../services/firebase/apiService'
import CyrillicToTranslit from 'cyrillic-to-translit-js'
import Loader from '../Loader'

function AddQuizCategory() {
  const [input, setInput] = useState({})
  const [isLoaded, setLoader] = useState(true)
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
    setLoader(false)
    if (!data.name){
      alert(`Пожалуйста, укажите название категории!`)
      setLoader(true)
    } else {      
      apiService.addQuizeCategory(data)
      window.setTimeout(() => {
        setUrlInput('')
        setInput({})
        setLoader(true)
      }, 1000)
    }    
  }

  return (
    <div className="row">
      <div className="container">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s12">
            {
              !isLoaded ? <Loader /> : null
            }
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
              value={input['category']}
            />
              <label htmlFor="question"></label>
            </div>
          </div>
          <button type="reset" className="waves-effect waves-light btn" onClick={handleSubmitForm}>Добавить</button>
        </form>
    </div>
  </div>
  )
}

export default AddQuizCategory