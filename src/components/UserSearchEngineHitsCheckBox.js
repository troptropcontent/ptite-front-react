import React, { Component } from 'react'
import './UserSearchEngineHitsCheckBox.css'


export class UserSearchEngineHitsCheckBox extends Component {
  render() {
    const id = this.props.hit.id
    const firstName = this.props.hit.first_name
    const lastName = this.props.hit.last_name
    return (
    <label className = "UserSearchEngineHitsCheckBox" key={id} htmlFor={id}>
      <p className="user-input-checkbox-name">
        {firstName+' '+lastName}
      </p>
      <input type="checkbox" id={id} name="usersSelected" value={id} />
    </label>
    )
  }
}

export default UserSearchEngineHitsCheckBox
