import React from 'react'
import apiService from '../../services/firebase/apiService'

class Result extends React.Component{

  constructor(options){
    super(options)
    this.state = {
      items: []
    }
  }

  async componentDidMount(){
    let categoryList = await apiService.getUserResult()
    const items = categoryList.map(item => {
      return item
    })
    this.setState({
      items: items
    })
  }

  render(){
    const items = this.state.items
    return (
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Total Score</th>
          </tr>
        </thead>

        <tbody>
          {
            items && items.map((item, index) => {
              return <tr key={index}><td> Unknown </td> <td> {item.score} из {item.total} </td> </tr>
            })
          }
        </tbody>
      </table>            
    )
  }
}

export default Result