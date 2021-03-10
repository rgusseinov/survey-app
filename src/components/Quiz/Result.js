import React from 'react'
import apiService from '../../services/firebase/apiService'

class Result extends React.Component{

  render(){
    return (
      <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Total Score</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>3 of 6</td>
          </tr>
        </tbody>
      </table>            
    )
  }
}

export default Result