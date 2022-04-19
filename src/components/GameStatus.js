import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function GameStatus() {
  const { pathname } = useLocation();

  const currRound = useSelector((state) => state.game.currRound);
  const rounds = useSelector((state) => state.game.rounds);
  const wins = useSelector((state) => state.game.wins);
  const cpuWins = useSelector((state) => state.game.cpuWins);

  return (
    <div>
      {pathname === '/game'
        ? (
          <>
            <div>
              <span>Round:</span>
              <span>
                {`${currRound === 7 ? 6 : currRound}/${rounds}`}
              </span>
            </div>
            <div>
              <span>Wins:</span>
              <span>{`${wins}`}</span>
              <span>Defeats:</span>
              <span>{`${cpuWins}`}</span>
            </div>
          </>
        ) : null}
    </div>
  );
}

export default GameStatus;
