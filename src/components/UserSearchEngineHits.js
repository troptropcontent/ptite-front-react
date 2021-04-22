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
    console.log("Hello form add user")
    const selectedUsers = this.state.selectedUsers
    selectedUsers.push(parseInt(user))
    this.setUserSelected(selectedUsers)
    // const actualUsersSelected = this.state.selectedUsers
    // const newList = actualUsersSelected.push(user)
    // this.setUserSelected(newList)
  }

  userSelected = (user) => {
    const actualUsersSelected = this.state.selectedUsers
    const checked = actualUsersSelected.find(userSelected => userSelected === user) === undefined ? false : true
    return checked
  }

  removeSelectedUser = (user) => {
    console.log("Hello form remove user")
    const actualUsersSelected = this.state.selectedUsers
    const indexOfTheUser = actualUsersSelected.findIndex(element => element === parseInt(user))
    actualUsersSelected.splice(indexOfTheUser,1)
    this.setUserSelected(actualUsersSelected)
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
