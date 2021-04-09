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
      
    }
  }

  setToken = (token) => {
    this.setState({token: token});
  }


  render() { 

    if (!this.state.token) {
      return <Login setToken={this.setToken} />
    }


    return (
      <div className="container">
        <h1 className="title">Hello from APP</h1>
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
