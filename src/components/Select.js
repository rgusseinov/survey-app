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
    const items = this.state.items
    return (
      <select className="browser-default" onChange={this.props.handleFieldChange} name="category">
        <option value="no"> Please select option </option>
        {
          items && items.map((item, index) => <option key={item.id} value={item.url}>{item.name}</option>)
        }        
      </select>
    )
  }

}

export default Select