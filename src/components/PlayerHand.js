import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import CardMini from './CardMini';
import { actionHidePlayerHand } from '../redux/actions';
import '../sass/components/PlayerHand.css';

function PlayerHand() {
  const playerHand = useSelector((state) => state.deck.playerHand);
  const { displayHand } = useSelector((state) => state.game.displayHand);

  const display = 'PlayerHand PlayerHand-display';
  const hide = 'PlayerHand PlayerHand-hidden';

  const dispatch = useDispatch();

  return (
    <section className={ displayHand ? display : hide }>
      <button
        className="PlayerHand-close-button"
        type="button"
        onClick={ () => dispatch(actionHidePlayerHand()) }
      >
        <AiFillCloseCircle />
      </button>
      <header className="PlayerHand-header">
        <p>Escolha uma carta</p>
      </header>
      <div className="PlayerHand-cards-container">
        {playerHand.map((card, index) => (
          <CardMini
            key={ `${card.cardName}-${index}` }
            index={ index }
            { ...card }
          />
        ))}
      </div>
    </section>
  );
}

export default PlayerHand;
