import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../sass/components/Header.css';

function Header() {
  return (
    <header className="Header">
      <Link to="/">
        <img src={ logo } alt="Sonic Trunfo" />
      </Link>
    </header>
  );
}

export default Header;
