import React, { Component } from 'react'
import fetchUserSearchHits from '../services/fetchUserSearchHits'
import './UserSearchEngineBar.css'

export class UserSearchEngineBar extends Component {

  

  

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
