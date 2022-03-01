import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          &nbsp;&nbsp;
          Time Travellers
        </div>
        <div className="menus">
          <ul>
            <li><NavLink to="/">Rockets</NavLink></li>
            <li><NavLink to="/mission">Mission</NavLink></li>
            <li className="my-profile">My Profile</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
