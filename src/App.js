import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import NewEvent from './components/NewEvent'
import NewGroup from './components/NewGroup'
import Login from './components/Login'
import fetchEvent from './services/fetchEvent';
import Navbar from './components/Navbar'
import NewEventBtn from './components/NewEventBtn'


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
    if (!this.getToken()) {
      return <Login setToken={this.setToken} />
    }
    
    return (
      <div className="container">
        <Navbar/>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/dashboard">
              <Dashboard eventList={this.state.eventList}/>
            </Route> */}
            <Route path="/events/new">
              <NewEvent/>
            </Route>
            <Route path="/groups/new">
              <NewGroup token={this.getToken()}/>
            </Route>
          </Switch>
        </BrowserRouter>
        <NewEventBtn/>
      </div>
    )
  }
}

export default App
