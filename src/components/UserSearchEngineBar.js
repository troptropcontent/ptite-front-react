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
    this.setState({inputValue: ""})
    this.props.closeHits()
  }

  stringifiedUserList = () => {
    const users = this.props.inputValue
    const numberOfUsers = users.length
    if (numberOfUsers <= 4) {
      return users.map(user => user[1])
    } else {
      const firstsElements = users.slice(0, 4)
      const numberOfOthers = numberOfUsers-4
      return `${firstsElements.map(user => user[1])} and ${numberOfOthers} ${numberOfOthers === 1 ? "other" : "others"}`
    }

  }

  render() {
    return (
      <div className="userSearchInputZone">
        <input type="text" name="userInput" id="userInput" onChange={this.handleChange} autoComplete="off" placeholder={this.stringifiedUserList()} value={this.state.inputValue}/>
        <a href="/" className="userSearchDoneBtn" onClick={this.handleDoneClick}>Done</a>
      </div>
    )
  }
}

export default UserSearchEngineBar
