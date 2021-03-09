import React, { useEffect } from 'react'
import apiService from '../../services/firebase/apiService'
import Loader from '../Loader'


class QuizCategory extends React.Component {
  constructor(options){
    super(options)
    this.state = {
      items: [],
      isCategoryLoaded: false
    }
  }

  async componentDidMount(){
    let categoryList = await apiService.getQuizeCategories()  
    // console.log(`categoryList`, categoryList)
    const items = categoryList.map(item => {
      return item
    })
    this.setState({
      items: items,
      isCategoryLoaded: true
    })
  }


  render(){
    // console.log(`items`, this.state.items)
    return (
      <div className="container">
        <div className="row">
          <div className="col s9">
            <h4> Выберите категорию тестирования </h4>
            <div className="collection">
              {
                !this.state.isCategoryLoaded ? <Loader /> : this.state.items.map(item =>
                  <div key={item.id} className="category-item">
                    <span>
                      <a href="#!"
                      onClick={this.props.onCategorySelect}
                      data-type={item.url}
                      className="collection-item">{ item.name }</a>
                    </span>
                    <span data-category={item.docRef} onClick={this.props.onCategoryRemove}> Remove </span>                    
                  </div>
                  )
              }
            </div>
          </div>
        </div>
      </div>)
  }

}

export default QuizCategory