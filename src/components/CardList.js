import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CardDeck from './CardDeck';
import NavBar from './NavBar';
import './CardList.css';

class CardList extends Component {
  render() {
    const {
      cardList,
      deckArray,
      removeCard,
      onInputChange,
      startGame,
    } = this.props;

    return (
      <section className="CardList">
        <header className="Card-list-header">
          <NavBar onInputChange={ onInputChange } startGame={ startGame } />
        </header>
        <div className="CardList-container">
          {cardList.map((card, index) => (
            <Card
              key={ `${card.cardName}-${index}` }
              index={ index }
              { ...card }
              removeCard={ removeCard }
            />
          ))}
          {deckArray.map((card, index) => (
            <CardDeck
              key={ `${card.cardName}-${index}` }
              { ...card }
            />
          ))}
        </div>
      </section>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  deckArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCard: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default CardList;
