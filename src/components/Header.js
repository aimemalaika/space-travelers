import React, { Component } from 'react';
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
