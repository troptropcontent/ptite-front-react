import React, {useState,useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import Login from './components/Login'
import useToken from './hooks/useToken'


function App() {

  const { token, setToken } = useToken();
  
  console.log("hello from app"+token)
  if(!token) {
    return <Login setToken={setToken} />
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

export default App;
