import React, { Component } from 'react'
import UserSearchEngine from './UserSearchEngine'

export class NewGroup extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  render() {
    return (
      <div className="NewGroup-wrapper">

        <form action="/groups" method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="name" className="new-group-name-input">
            <h1 className="NewGroup-label-name">Nom :</h1>
            <input type="text" name="name" id="NewGroup-input-name" className="NewGroup-input-name"/>
          </label>
          <UserSearchEngine token={this.props.token}/>
          <input type="submit" value="Create new group"/>

        </form>
      </div>
    )
  }
}

export default NewGroup
