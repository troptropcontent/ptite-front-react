import React, {useState,useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState();
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
