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
  
  render() {
    return (
      <div className="UserSearchEngine">
        <UserSearchEngineBar setHitsList={this.setHitsList}/>
        <UserSearchEngineHits hitsList={this.state.hitsList}/>
      </div>
    )
  }
}

export default UserSearchEngine
