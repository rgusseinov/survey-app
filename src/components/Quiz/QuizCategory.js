import React from 'react'

function QuizCategory({ onCategorySelect }) {

  return (
    <div className="container">
      <div className="row">
        <div className="col s9">
          <h4> Выберите категорию тестирования </h4>
          <div className="collection">
            <a href="#!" onClick={onCategorySelect} data-type="frontend" className="collection-item"><span className="badge">3 вопроса</span>Программирование</a>
            <a href="#!" onClick={onCategorySelect} data-type="backend" className="collection-item"> История Казахстана</a>
            <a href="#!" onClick={onCategorySelect} data-type="gamedev" className="collection-item">Философия</a>
            <a href="#!" onClick={onCategorySelect} data-type="mobile" className="collection-item">Спорт</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizCategory