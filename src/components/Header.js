import React, { Component } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <img className="Header-logo" src={ logo } alt="Sonic Trunfo" />
      </header>
    );
  }
}

export default Header;
