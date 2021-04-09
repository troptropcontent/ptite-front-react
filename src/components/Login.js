import React, { Component } from 'react'

export class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  handleChangeInputUsername = (event) => {
    console.log("Username update : "+event.target.value)
  }
  handleChangeInputPassword = (event) => {
    console.log("Password update : "+event.target.value)
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

