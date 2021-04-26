import React, { Component } from 'react'
import fetchUserSearchHits from '../services/fetchUserSearchHits'
import './UserSearchEngineBar.css'

export class UserSearchEngineBar extends Component {

  
  handleChange = (event) => {
    console.log(event.target.value)
    fetchUserSearchHits(this.props.token,event.target.value, this.props.setHitsList)
  }

  render() {
    return (
      <div className="userSearchInputZone">
        <input type="text" name="userInput" id="userInput" onChange={this.handleChange} autoComplete="off"/>
        <a href="/" className="userSearchDoneBtn">Done</a>
      </div>
    )
  }
}

export default UserSearchEngineBar
