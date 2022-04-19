import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import WinOrLoseMessage from './WinOrLoseMessage';
import '../sass/components/Duel.css';
import { actionNextRound } from '../redux/actions';

function Duel() {
  const playerCard = useSelector((state) => state.game.playerCard);
  const cpuCard = useSelector((state) => state.game.cpuCard);
  const didPlayerWinRound = useSelector((state) => state.game.didPlayerWinRound);
  const draw = useSelector((state) => state.game.draw);
  const displayDuel = useSelector((state) => state.game.displayDuel);

  const dispatch = useDispatch();

  const display = 'Duel Duel-display';
  const hide = 'Duel Duel-hidden';

  return (
    <section className={ displayDuel ? display : hide }>
      <section className="Duel-PlayerCard">
        <p className="Duel-PlayerText">VOCÊ</p>
        <Card { ...playerCard } preview />
        <WinOrLoseMessage winOrLose={ didPlayerWinRound } draw={ draw } />
      </section>
      <section className="Duel-CpuCard">
        <p className="Duel-CpuText">CPU</p>
        <Card { ...cpuCard } preview />
        <WinOrLoseMessage winOrLose={ !didPlayerWinRound } draw={ draw } />
      </section>
      <footer>
        <button
          className="Duel-next-button"
          type="button"
          onClick={ () => dispatch(actionNextRound()) }
        >
          Próxima Rodada
        </button>
      </footer>
    </section>
  );
}

export default Duel;
