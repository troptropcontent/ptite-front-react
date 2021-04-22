import React, { Component } from 'react'
import UserSearchEngineHitsCheckBox from './UserSearchEngineHitsCheckBox'

export class UserSearchEngineHits extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    selectedUsers: []
    }
  }

  setUserSelected = (newList) => {
    this.setState({selectedUsers: newList})
  }

  addSelectedUser = (user) => {
    const actualUsersSelected = this.state.selectedUsers
    const newList = actualUsersSelected.push(user)
    this.setUserSelected(newList)
  }

  userSelected = (user) => {
    const actualUsersSelected = this.state.selectedUsers
    return actualUsersSelected.find(userSelected => userSelected == user) == undefined ? false : true
  }

  removeSelectedUser = (user) => {
    const actualUsersSelected = this.state.selectedUsers
    const userToDeleteIndex = actualUsersSelected.find(userSelected => userSelected == user)
    const newList = actualUsersSelected.splice((userToDeleteIndex), 1)
    this.setUserSelected(newList)
  }
  
  render() {
    const hits = this.props.hitsList 
    const hitsList = hits ? hits.map((hit) => <UserSearchEngineHitsCheckBox hit={hit} userSelected={this.userSelected(hit.id)} addSelectedUser={this.addSelectedUser} removeSelectedUser={this.removeSelectedUser}  />) : null
    
    return (
      <div className="UserSearchEngineHits">
        {hitsList}
      </div>
    )
  }
}

export default UserSearchEngineHits
