import React, { Component } from 'react'
import UserSearchEngineBar from './UserSearchEngineBar'
import UserSearchEngineHits from './UserSearchEngineHits'

export class UserSearchEngine extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  setHitsList = (hits) => {
    this.setState({hitsList: hits})
  }

  setUsersSelected = (users) => {
    this.setState({usersSelected: users})
  }
  
  render() {
    return (
      <div className="UserSearchEngine">
        <UserSearchEngineBar token={this.props.token} setHitsList={this.setHitsList}/>
        <UserSearchEngineHits hitsList={this.state.hitsList} setUsersSelected={this.setUsersSelected}/>
      </div>
    )
  }
}

export default UserSearchEngine
