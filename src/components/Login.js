import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (

      <div className="login-form">
        <h1>Please login</h1>
        <form>
          <label htmlFor="">
            <p>Username</p>
            <input type="text"/>
          </label>
          <label htmlFor="">
            <p>Password</p>
            <input type="password"/>
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

