import React, { Component } from 'react'
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
    return (
    <label className = "UserSearchEngineHitsCheckBox" key={id} htmlFor={id}>
      <p className="user-input-checkbox-name">
        {firstName+' '+lastName}
      </p>
      <input type="checkbox" id={id} name="usersSelected" value={id} onChange={this.handleChange} checked={this.props.userSelected} />
    </label>
    )
  }
}

export default UserSearchEngineHitsCheckBox
