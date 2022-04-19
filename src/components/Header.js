import React from 'react';
import GameStatus from './GameStatus';
import PlayerAvatar from './PlayerAvatar';

function Header() {
  return (
    <header>
      <GameStatus />
      <PlayerAvatar />
    </header>
  );
}

export default Header;
