import React, { Component } from 'react'
import UserAvatar from './UserAvatar'
import './UserSearchEngineHitsCheckBox.css'


export class UserSearchEngineHitsCheckBox extends Component {
  handleChange = (event) => {
    const userId = event.target.attributes.id.value
    const userSelected = this.props.userSelected
    userSelected ? this.props.removeSelectedUser(userId) : this.props.addSelectedUser(userId)
  }

  render() {
    const id = this.props.hit.id
    const firstName = this.props.hit.first_name
    const lastName = this.props.hit.last_name
    const photoId = this.props.hit.photo_id
    return (
    <label className = "UserSearchEngineHitsCheckBox" key={id} htmlFor={id}>
      <div className="user-img-name">
        <UserAvatar firstName={firstName} lastName={lastName} photoId={photoId} size={50}/>
        <p className="user-input-checkbox-name">
          {firstName+' '+lastName}
        </p>
      </div>
      <input type="checkbox" id={id} name="usersSelected" value={id} onChange={this.handleChange} checked={this.props.userSelected} />
    </label>
    )
  }
}

export default UserSearchEngineHitsCheckBox
