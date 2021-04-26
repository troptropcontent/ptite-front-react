import React, { Component } from 'react'
import fetchUserSearchHits from '../services/fetchUserSearchHits'
import './UserSearchEngineBar.css'

export class UserSearchEngineBar extends Component {

  
  handleChange = (event) => {
    console.log(event.target.value)
    fetchUserSearchHits(this.props.token,event.target.value, this.props.setHitsList)
  }
 
  handleDoneClick = (event) => {
    event.preventDefault()
    console.log("hello from handle Done CLick")
  }

  render() {
    return (
      <div className="userSearchInputZone">
        <input type="text" name="userInput" id="userInput" onChange={this.handleChange} autoComplete="off"/>
        <a href="/" className="userSearchDoneBtn" onClick={this.handleDoneClick}>Done</a>
      </div>
    )
  }
}

export default UserSearchEngineBar
