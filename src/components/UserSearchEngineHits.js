import React, { Component } from 'react'
import UserSearchEngineHitsCheckBox from './UserSearchEngineHitsCheckBox'
import UserAvatar from './UserAvatar'

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
    const selectedUsers = this.state.selectedUsers
    const serializedUser=[user.id, user.last_name, user.first_name, user.photo_id]
    selectedUsers.push(serializedUser)
    this.setUserSelected(selectedUsers)
  }

  userSelected = (id) => {
    const actualUsersSelected = this.state.selectedUsers
    const checked = actualUsersSelected.find(userSelected => userSelected[0] === id) === undefined ? false : true
    return checked
  }

  removeSelectedUser = (id) => {
    console.log("Hello form remove user")
    const actualUsersSelected = this.state.selectedUsers
    const indexOfTheUser = actualUsersSelected.findIndex(element => element[0] === id)
    actualUsersSelected.splice(indexOfTheUser,1)
    this.setUserSelected(actualUsersSelected)
  }
  
  render() {
    const hits = this.props.hitsList 
    const hitsList = hits ? hits.map((hit) => <UserSearchEngineHitsCheckBox hit={hit} userSelected={this.userSelected(hit.id)} addSelectedUser={this.addSelectedUser} removeSelectedUser={this.removeSelectedUser}  />) : null
    const userSelectedTiles = this.state.selectedUsers.map(serializedUser => <UserAvatar size={50} firstName={serializedUser[1]} lastName={serializedUser[2]} photoId={serializedUser[3]} /> )
    return (
      <div className="UserSearchEngineHits">
        <div className="usersSelected">
        {userSelectedTiles}
        </div>
        {hitsList}
      </div>
    )
  }
}

export default UserSearchEngineHits
