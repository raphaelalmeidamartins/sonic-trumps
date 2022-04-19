import React from 'react';
import { useSelector } from 'react-redux';

function PlayerAvatar() {
  const playerName = useSelector((state) => state.player.playerName);
  const gravatar = useSelector((state) => state.player.gravatar);

  return (
    <div>
      <img src={ gravatar } alt="player avatar" />
      <span>{playerName}</span>
    </div>
  );
}

export default PlayerAvatar;
