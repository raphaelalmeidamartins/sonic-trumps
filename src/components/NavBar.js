import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/deck">Deck</Link></li>
        <li><Link to="/game">Game</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
