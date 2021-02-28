import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddQuiz from './components/Quiz/AddQuiz';
import AddQuizCategory from './components/Quiz/AddQuizCategory';
import Quiz from './components/Quiz/Quiz';
import QuizCategory from './components/Quiz/QuizCategory';

function App() {
    const [activeCategory, setActiveCategory] = useState(0)

    function handleCategorySelect(e) {
      const category = e.target.getAttribute('data-type')
      setActiveCategory(category)
    }

    return(
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            {
              activeCategory ?
                <Quiz activeCategory={activeCategory} /> :
                <QuizCategory onCategorySelect={handleCategorySelect} />
            }
          </Route>

          <Route path="/quiz">
            <AddQuiz />
          </Route>

          <Route path="/quizCategory">
            <AddQuizCategory />
          </Route>

        </Switch>
      </div>
    )
}



export default App;
