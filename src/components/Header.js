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
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rockets</NavLink></li>
            <li><NavLink to="/mission" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Mission</NavLink></li>
            <li className="my-profile" ><NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
