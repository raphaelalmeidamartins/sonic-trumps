import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

function Duel() {
  const playerCard = useSelector((state) => state.game.playerCard);
  const cpuCard = useSelector((state) => state.game.cpuCard);
  const didPlayerWinRound = useSelector((state) => state.game.didPlayerWinRound);
  const draw = useSelector((state) => state.game.draw);

  return (
    <div>
      {Boolean(playerCard && cpuCard) && (
        <>
          <div>
            <p>
              {draw && 'Draw!'}
              {didPlayerWinRound && 'Win!'}
              {(!didPlayerWinRound && !draw) && 'Lose!'}
            </p>
            <Card { ...playerCard } hand={ false } />
          </div>
          <div>
            <p>
              {draw && 'Draw!'}
              {didPlayerWinRound && 'Lose!'}
              {(!didPlayerWinRound && !draw) && 'Win!'}
            </p>
            <Card { ...cpuCard } />
          </div>
        </>
      )}
    </div>
  );
}

export default Duel;
