import React, { Component } from 'react'
import fetchUserSearchHits from '../services/fetchUserSearchHits'
export class UserSearchEngineBar extends Component {

  
  handleChange = (event) => {
    console.log(event.target.value)
    fetchUserSearchHits(this.props.token,event.target.value, this.props.setHitsList)
  }

  render() {
    return (
      <input type="text" name="userInput" id="userInput" onChange={this.handleChange} autoComplete="off"/>
    )
  }
}

export default UserSearchEngineBar
