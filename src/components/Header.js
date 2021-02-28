import React from 'react'

function Header() {
  return (
    <nav className="green">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo right">Survey</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/">Главная</a></li>
          <li><a href="/quiz">Вопросы</a></li>
          <li><a href="/quizCategory">Категории</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header