import React, { Component } from 'react'
import "./UserInputCheckbox.css"

export class UserInputCheckbox extends Component {
  render() {
    return (
      <div className="UserInputCheckbox-wrapper">
          <label htmlFor="user">
            <input type="checkbox" id={this.props.user.id} name="usersSelected" value={this.props.user.id}/>
            <p className="user-input-checkbox-name">
              {this.props.user.name}
            </p>
            <p className="user-input-checkbox-photo">
              {this.props.user.photo}
            </p>
          </label>
      </div>
    )
  }
}

export default UserInputCheckbox
