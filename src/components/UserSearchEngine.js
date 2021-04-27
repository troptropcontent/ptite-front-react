import React, { Component } from 'react'
import UserSearchEngineBar from './UserSearchEngineBar'
import UserSearchEngineHits from './UserSearchEngineHits'

export class UserSearchEngine extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      selectedUsers: [],
      hitsOpen: false
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
    selectedUsers.unshift(serializedUser)
    this.setUserSelected(selectedUsers)
  }

  removeSelectedUser = (id) => {
    const actualUsersSelected = this.state.selectedUsers
    const indexOfTheUser = actualUsersSelected.findIndex(element => element[0] === id)
    actualUsersSelected.splice(indexOfTheUser,1)
    this.setUserSelected(actualUsersSelected)
  }

  toggleHits = () => {
    this.setState({hitsOpen: true})
  }




  
  render() {
    const  hits = this.state.hitsOpen ? <UserSearchEngineHits hitsList={this.state.hitsList} usersSelected={this.state.selectedUsers} addSelectedUser={this.addSelectedUser} removeSelectedUser={this.removeSelectedUser} /> : null
    
    return (
      <div className="UserSearchEngine">
        <UserSearchEngineBar token={this.props.token} setHitsList={this.setHitsList} toggleHits={this.toggleHits}/>
        {hits}
      </div>
    )
  }
}

export default UserSearchEngine
