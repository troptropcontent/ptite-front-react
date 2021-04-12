import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import Login from './components/Login'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      connected: this.getToken() ? true : false
    }
  }

  setToken = (token) => {
    sessionStorage.setItem('token', token.token)
    this.setState({connected: true})
  }

  getToken  = () => {
    const tokenSessionStorage = sessionStorage.getItem('token')
    return tokenSessionStorage ? tokenSessionStorage : null
  }


  render() { 
    console.log("Hello from get token"+this.getToken())
    if (!this.getToken()) {
      return <Login setToken={this.setToken} />
    }


    return (
      <div className="container">
        <h1 className="title">Hello from APP, you are now connected
        </h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/preferences">
              <Preferences/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
