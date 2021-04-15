import React, { Component } from 'react'
import UserInputCheckbox from "./UserInputCheckbox"

export class NewGroup extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  render() {
    return (
      <div className="NewGroup-wrapper">
        <form action="/groups" method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <h1 className="NewGroup-label-name">Nom :</h1>
            <input type="text" name="name" id="NewGroup-input-name" className="NewGroup-input-name"/>
          </label>
          <div className="user-search">
            <div className="user-search-bar">

            </div>
            <div className="user-search-results">
              <UserInputCheckbox user={{id: 1, name: "name 1", photo: "Photo 1"}}/>
              <UserInputCheckbox user={{id: 2, name: "name 2", photo: "Photo 2"}}/>
              <UserInputCheckbox user={{id: 3, name: "name 3", photo: "Photo 3"}}/>
              <UserInputCheckbox user={{id: 4, name: "name 4", photo: "Photo 4"}}/>
              <UserInputCheckbox user={{id: 5, name: "name 5", photo: "Photo 5"}}/>
            </div>
            <input type="submit" value="Create new group"/>
          </div>

        </form>
      </div>
    )
  }
}

export default NewGroup
