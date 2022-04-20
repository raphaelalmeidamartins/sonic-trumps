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
import usePrevious from '../hooks/usePrevious';
import gameOverSound from '../assets/sound-effects/game-over.mp3';
import victorySound from '../assets/sound-effects/victory.mp3';
import roundWinSound from '../assets/sound-effects/round-win.mp3';
import roundLoseSound from '../assets/sound-effects/round-lose.mp3';
import '../sass/pages/GamePage.css';

function GamePage() {
  useSessionStorage('player profile');
  useReturnToLogin();

  const startGame = useStartGame();

  // used like componentDidMount, only runs when the component is mounted
  useEffect(startGame, []); // eslint-disable-line react-hooks/exhaustive-deps

  const currRound = useSelector((state) => state.game.currRound);
  const rounds = useSelector((state) => state.game.rounds);
  const didPlayerWinRound = useSelector((state) => state.game.didPlayerWinRound);
  const displayDuel = useSelector((state) => state.game.displayDuel);
  const wins = useSelector((state) => state.game.wins);
  const cpuWins = useSelector((state) => state.game.cpuWins);

  const prevRound = usePrevious(currRound);

  useEffect(() => {
    const finalRound = 7;
    const didPlayerWin = wins > cpuWins;
    const victorySoundEffect = new Audio(victorySound);
    const gameOverSoundEffect = new Audio(gameOverSound);
    const roundWinSoundEffect = new Audio(roundWinSound);
    const roundLoseSoundEffect = new Audio(roundLoseSound);

    if (currRound > prevRound && currRound < finalRound) {
      if (didPlayerWinRound) roundWinSoundEffect.play();
      if (!didPlayerWinRound) roundLoseSoundEffect.play();
    }

    if (currRound === finalRound) {
      if (didPlayerWin) victorySoundEffect.play();
      if (!didPlayerWin) gameOverSoundEffect.play();
    }
  }, [currRound, cpuWins, didPlayerWinRound, displayDuel, wins, prevRound]);

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
