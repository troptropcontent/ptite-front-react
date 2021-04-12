import React, { Component } from 'react'
import './Navbar.css'
import logo from '../logo.svg';
import { Menu } from 'react-feather';

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img className="navbar-logo" src={logo} alt="logo"/>
        <Menu size={48} color="#28527a"/>
      </div>
    )
  }
}

export default Navbar
