import React, { Component } from 'react'
import UserSearchEngineHitsCheckBox from './UserSearchEngineHitsCheckBox'
import UserAvatar from './UserAvatar'
import RemovableTile from './RemovableTile'
import './UserSearchEngineHits.css'

export class UserSearchEngineHits extends Component {

  constructor(props) {
    super(props)
  
    this.state = {

    }
  }

  

  userSelected = (id) => {
    const actualUsersSelected = this.props.usersSelected
    const checked = actualUsersSelected.find(userSelected => userSelected[0] === id) === undefined ? false : true
    return checked
  }

  render() {
    const hits = this.props.hitsList 
    const hitsList = hits ? hits.map((hit) => <UserSearchEngineHitsCheckBox hit={hit} userSelected={this.userSelected(hit.id)} addSelectedUser={this.props.addSelectedUser} removeSelectedUser={this.props.removeSelectedUser}  />) : null
    const userSelectedTiles = this.props.usersSelected.map(serializedUser => <RemovableTile itemId={serializedUser[0]} tileContent={<UserAvatar size={50} firstName={serializedUser[1]} lastName={serializedUser[2]} photoId={serializedUser[3]}/>} crossFunction={this.props.removeSelectedUser} /> )
    return (
      
      <div className="UserSearchEngineHits">
        <div className="usersSelected">
          {userSelectedTiles.length === 0 ? <p>Ajoutez des personnes</p> : userSelectedTiles}
        </div>
        <div className="hits">
          {hitsList}
        </div>
      </div>
    )
  }
}

export default UserSearchEngineHits
