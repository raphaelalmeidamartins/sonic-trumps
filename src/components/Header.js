import React from 'react';
import logo from '../assets/logo.png';
import '../sass/components/Header.css';

function Header() {
  return (
    <header className="Header">
      <img src={ logo } alt="Sonic Trunfo" />
    </header>
  );
}

export default Header;
