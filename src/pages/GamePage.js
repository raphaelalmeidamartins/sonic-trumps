import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Duel from '../components/Duel';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import PlayerHand from '../components/PlayerHand';
import ResultsMessage from '../components/ResultsMessage';
import SelectAttribute from '../components/SelectAttribute';
import useReturnToLogin from '../hooks/useReturnToLogin';
import useSessionStorage from '../hooks/useSessionStorage';
import useStartGame from '../hooks/useStartGame';

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
      <NavBar />
      { currRound > rounds && (
        <ResultsMessage />
      ) }
      { currRound <= rounds && (
        <main>
          <Duel />
          <SelectAttribute />
          <PlayerHand />
        </main>
      ) }
    </>
  );
}

export default GamePage;
