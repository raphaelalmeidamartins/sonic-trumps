import React from 'react';
import { useSelector } from 'react-redux';
// import useStartGame from '../hooks/useStartGame';
import drawGif from '../assets/gifs/draw.gif';
import gameOver from '../assets/gifs/game-over.gif';
import victory from '../assets/gifs/victory.gif';
import '../sass/components/ResultsMessage.css';

function ResultsMessage() {
  const wins = useSelector((state) => state.game.wins);
  const cpuWins = useSelector((state) => state.game.cpuWins);

  // const startGame = useStartGame();

  if (wins === cpuWins) {
    return (
      <section className="ResultsMessage">
        <img src={ drawGif } alt="draw" />
        <p>Empate!</p>
      </section>
    );
  }
  return wins > cpuWins
    ? (
      <section className="ResultsMessage">
        <img src={ victory } alt="victory pose" />
        <p>Parabéns, você ganhou!</p>
      </section>
    )
    : (
      <section className="ResultsMessage">
        <img src={ gameOver } alt="game over" />
        <p>Que pena, você perdeu!</p>
      </section>
    );
}

export default ResultsMessage;
