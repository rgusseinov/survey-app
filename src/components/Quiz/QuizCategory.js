import React from 'react'
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
            <h3> Выберите категорию тестирования </h3>
            <table>
              {
                  !this.state.isCategoryLoaded ? <Loader /> : this.state.items.map(item =>
                    <tr key={item.id} className="category-item">
                      <td>
                        <a href="#!"
                        onClick={this.props.onCategorySelect}
                        data-type={item.url}
                        className="collection-item">{ item.name }</a>
                      </td>
                      <td data-category={item.docRef} onClick={this.props.onCategoryRemove}> Удалить </td>      
                    </tr>
                    )
                }
            </table>
          </div>
        </div>
      </div>)
  }

}

export default QuizCategory