import React from 'react'
import apiService from '../services/firebase/apiService'

class Select extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      items:[]
    }
  }
  async componentDidMount(){
    const items = await apiService.getQuizeCategories()
    this.setState({
      items
    })
  }
  
  render(){
    return (
      <select className="browser-default" onChange={this.props.handleFieldChange} name="category">
        {
          this.state.items && this.state.items.map(item => <option key={item.id} value={item.url}>{item.name}</option>)
        }        
      </select>
    )
  }

}

export default Select