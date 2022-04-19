import React from 'react';
import { useSelector } from 'react-redux';
import useStartGame from '../hooks/useStartGame';

function ResultsMessage() {
  const wins = useSelector((state) => state.game.wins);
  const cpuWins = useSelector((state) => state.game.cpuWins);

  const startGame = useStartGame();

  return (
    <section>
      <p>
        {wins > cpuWins && 'Well done!'}
        {wins < cpuWins && 'Try again!'}
        {wins === cpuWins && 'Draw!'}
      </p>
      <button
        type="button"
        onClick={ startGame }
      >
        Play again
      </button>
    </section>
  );
}

export default ResultsMessage;
