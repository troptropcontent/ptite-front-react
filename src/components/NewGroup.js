import React, { Component } from 'react'
import UserSearchEngine from './UserSearchEngine'

export class NewGroup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  setInputValue = (input) => {this.setState({inputValue: input})}

  handleSubmit = (event) => {
    event.preventDefault()
    const input = {name: event.target[0].value,
                  users: this.state.inputValue.map(user => user[0])
                  }
    console.log(input)
  }

  render() {
    return (
      <div className="NewGroup-wrapper">

        <form action="/groups" method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="name" className="new-group-name-input">
            <h1 className="NewGroup-label-name">Nom :</h1>
            <input type="text" name="name" id="NewGroup-input-name" className="NewGroup-input-name"/>
          </label>
          <UserSearchEngine token={this.props.token} setInputValue={this.setInputValue}/>
          <input type="submit" value="Create new group"/>

        </form>
      </div>
    )
  }
}

export default NewGroup
