import React from 'react';
import { useSelector } from 'react-redux';
import '../sass/components/GameHeader.css';

function GameHeader() {
  const wins = useSelector((state) => state.game.wins);
  const cpuWins = useSelector((state) => state.game.cpuWins);
  const currRound = useSelector((state) => state.game.currRound);

  return (
    <header className="GameHeader">
      <span className="GameHeader-rounds">{ `Rodadas: ${currRound - 1}/6` }</span>
      <div className="GameHeader-wins-container">
        <span>{ `Vitórias: ${wins}`}</span>
        <span>{ `Derrotas: ${cpuWins}`}</span>
      </div>
    </header>
  );
}

export default GameHeader;
