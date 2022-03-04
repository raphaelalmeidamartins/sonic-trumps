import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import CardMini from './CardMini';
import './PlayerHand.css';

class PlayerHand extends Component {
  render() {
    const { playerHand, selectCard, displayHand, hideHand } = this.props;
    const display = 'PlayerHand PlayerHand-display';
    const hide = 'PlayerHand PlayerHand-hidden';

    return (
      <section className={ displayHand ? display : hide }>
        <button
          className="PlayerHand-close-button"
          type="button"
          onClick={ hideHand }
        >
          <AiFillCloseCircle />
        </button>
        <header className="PlayerHand-header">
          <p className="PlayerHand-header-text">Escolha uma carta</p>
        </header>
        <div className="PlayerHand-cards-container">
          {playerHand.map((card, index) => (
            <CardMini
              key={ `${card.cardName}-${index}` }
              index={ index }
              { ...card }
              cardPosition={ `CardPosition-${index + 1}` }
              selectCard={ selectCard }
            />
          ))}
        </div>
      </section>
    );
  }
}

PlayerHand.defaultProps = {
  playerHand: null,
};

PlayerHand.propTypes = {
  playerHand: PropTypes.arrayOf(PropTypes.object),
  selectCard: PropTypes.func.isRequired,
  displayHand: PropTypes.bool.isRequired,
  hideHand: PropTypes.func.isRequired,
};

export default PlayerHand;
