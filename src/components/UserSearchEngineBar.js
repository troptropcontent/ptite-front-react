import React, { Component } from 'react'
import fetchUserSearchHits from '../services/fetchUserSearchHits'
export class UserSearchEngineBar extends Component {

  
  handleChange = (event) => {
    console.log(event.target.value)
    fetchUserSearchHits(this.props.token,event.target.value)
  }

  render() {
    return (
      <input type="text" name="userInput" id="userInput" onChange={this.handleChange}/>
    )
  }
}

export default UserSearchEngineBar
