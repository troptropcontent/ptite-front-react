import React, { Component } from 'react'
import login from '../services/login'

export class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  // update the username state of the component with the input on each change
  handleChangeInputUsername = (event) => {
    this.setState({username: event.target.value})
  }
  // update the password state of the component with the input on each change
  handleChangeInputPassword = (event) => {
    this.setState({password: event.target.value})
  }

  render() {
    return (

      <div className="login-form">
        <h1>Please login</h1>
        <form>
          <label htmlFor="">
            <p>Username</p>
            <input type="text" onChange={this.handleChangeInputUsername}/>
          </label>
          <label htmlFor="">
            <p>Password</p>
            <input type="password" onChange={this.handleChangeInputPassword}/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login

