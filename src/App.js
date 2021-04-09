import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import Login from './components/Login'


function App() {
  return (
    <div className="container">
      <h1 className="title">Hello from APP</h1>
      <Login/>
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

export default App;
