import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
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
    )
  }
}

export default Login
