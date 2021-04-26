import React, { Component } from 'react'
import UserSearchEngineBar from './UserSearchEngineBar'
import UserSearchEngineHits from './UserSearchEngineHits'

export class UserSearchEngine extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      selectedUsers: []
       
    }
  }

  setHitsList = (hits) => {
    this.setState({hitsList: hits})
  }

  setUserSelected = (newList) => {
    this.setState({selectedUsers: newList})
  }

  addSelectedUser = (user) => {
    const selectedUsers = this.state.selectedUsers
    const serializedUser=[user.id, user.last_name, user.first_name, user.photo_id]
    selectedUsers.push(serializedUser)
    this.setUserSelected(selectedUsers)
  }

  removeSelectedUser = (id) => {
    console.log("Hello form remove user")
    const actualUsersSelected = this.state.selectedUsers
    const indexOfTheUser = actualUsersSelected.findIndex(element => element[0] === id)
    actualUsersSelected.splice(indexOfTheUser,1)
    this.setUserSelected(actualUsersSelected)
  }





  
  render() {
    return (
      <div className="UserSearchEngine">
        <UserSearchEngineBar token={this.props.token} setHitsList={this.setHitsList}/>
        <UserSearchEngineHits hitsList={this.state.hitsList} usersSelected={this.state.selectedUsers} addSelectedUser={this.addSelectedUser} removeSelectedUser={this.removeSelectedUser}    />
      </div>
    )
  }
}

export default UserSearchEngine
