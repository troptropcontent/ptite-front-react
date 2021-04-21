import React, { Component } from 'react'
import "./UserInputCheckbox.css"

export class UserInputCheckbox extends Component {
  render() {
    const checked = this.props.checked
    return (
          <label key={this.props.user.id} htmlFor={this.props.user.id}>
            <input type="checkbox" id={this.props.user.id} name="usersSelected" value={this.props.user.id} />
            <p className="user-input-checkbox-name">
              {this.props.user.name}
            </p>
            <p className="user-input-checkbox-photo">
              {this.props.user.photo}
            </p>
          </label>
    )
  }
}

export default UserInputCheckbox
