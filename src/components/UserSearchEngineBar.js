import React, { Component } from 'react'
import fetchUserSearchHits from '../services/fetchUserSearchHits'
import './UserSearchEngineBar.css'

export class UserSearchEngineBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     
    }
  }
  
  
  handleChange = (event) => {
    console.log(event.target.value)
    this.props.openHits()
    this.setState({inputValue: event.target.value})
    fetchUserSearchHits(this.props.token,event.target.value, this.props.setHitsList)
  }
 
  handleDoneClick = (event) => {
    event.preventDefault()
    const selectedUsersNames = this.props.inputValue.map(user => user[1])
    this.setState({inputValue: selectedUsersNames})
    this.props.closeHits()
  }

  render() {
    return (
      <div className="userSearchInputZone">
        <input type="text" name="userInput" id="userInput" onChange={this.handleChange} autoComplete="off" placeholder={this.state.inputValue}/>
        <a href="/" className="userSearchDoneBtn" onClick={this.handleDoneClick}>Done</a>
      </div>
    )
  }
}

export default UserSearchEngineBar
