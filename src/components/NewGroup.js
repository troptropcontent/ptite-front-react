import React, { Component } from 'react'

export class NewGroup extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    console.log("The form have been submitted")
  }

  render() {
    return (
      <div className="NewGroup-wrapper">
        <form action="/groups" method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <h1 className="NewGroup-label-name">Nom :</h1>
            <input type="text" name="name" id="NewGroup-input-name" className="NewGroup-input-name"/>
          </label>
        </form>
      </div>
    )
  }
}

export default NewGroup
