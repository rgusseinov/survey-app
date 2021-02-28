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
    const items = categoryList.map(item => {
      return item
    })
    this.setState({
      items: items,
      isCategoryLoaded: true
    })
  }


  render(){

  return (
    <div className="container">
      <div className="row">
        <div className="col s9">
          <h4> Выберите категорию тестирования </h4>
          <div className="collection">
            {
              !this.state.isCategoryLoaded ? <Loader /> : this.state.items.map(item => 
                <a key={item.id} href="#!"
                onClick={this.props.onCategorySelect}
                data-type={item.url}
                className="collection-item">{ item.name }</a>)
            }
          </div>
        </div>
      </div>
    </div>)
  }

}

export default QuizCategory