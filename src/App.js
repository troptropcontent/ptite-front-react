import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import Login from './components/Login'
import fetchEvents from './services/fetchEvent'
import fetchEvent from './services/fetchEvent';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      connected: this.getToken() ? true : false 
    }
  }

  setEventList = (eventList) => {
    this.setState({eventList:  eventList})
  }

  setToken = (token) => {
    sessionStorage.setItem('token', token.token)
    this.setState({connected: true})
  }

  getToken  = () => {
    const tokenSessionStorage = sessionStorage.getItem('token')
    return tokenSessionStorage ? tokenSessionStorage : null
  }

  componentDidMount() {
      // fetch de events for this user if getToken() return a token (meaning that the user is connected)
      if (this.getToken()) {
        fetchEvent(this.setEventList,this.getToken())
      }
  }


  render() { 
    console.log("Hello from get token"+this.getToken())
    if (!this.getToken()) {
      return <Login setToken={this.setToken} />
    }
    

    return (
      <div className="container">
        <h1 className="title">Hello from APP, you are now connected</h1>

        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard eventList={this.state.eventList}/>
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
