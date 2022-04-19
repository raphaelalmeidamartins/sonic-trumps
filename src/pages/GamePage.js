import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Duel from '../components/Duel';
import GameHeader from '../components/GameHeader';
import Header from '../components/Header';
import PlayerHand from '../components/PlayerHand';
import ResultsMessage from '../components/ResultsMessage';
import SelectAttribute from '../components/SelectAttribute';
import useReturnToLogin from '../hooks/useReturnToLogin';
import useSessionStorage from '../hooks/useSessionStorage';
import useStartGame from '../hooks/useStartGame';
import '../sass/pages/GamePage.css';

function GamePage() {
  useSessionStorage('player profile');
  useReturnToLogin();

  const startGame = useStartGame();

  // used like componentDidMount, only runs when the component is mounted
  useEffect(startGame, []); // eslint-disable-line react-hooks/exhaustive-deps

  const currRound = useSelector((state) => state.game.currRound);
  const rounds = useSelector((state) => state.game.rounds);

  return (
    <>
      <Header />
      <main className="GamePage">
        <GameHeader />
        <div className="GamePage-panel">
          { currRound > rounds && (
            <ResultsMessage />
          ) }
          { currRound <= rounds && (
            <>
              <Duel />
              <SelectAttribute />
              <PlayerHand />
            </>
          ) }
        </div>
      </main>
    </>
  );
}

export default GamePage;
