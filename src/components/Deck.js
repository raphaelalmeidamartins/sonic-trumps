import React from 'react';
import { useSelector } from 'react-redux';
import deckArray from '../data/deck-data';
import '../sass/components/Deck.css';
import Card from './Card';

function Deck() {
  const customCards = useSelector((state) => state.customCard.customCards);
  const cardFilters = useSelector((state) => state.cardFilters);

  const filterCards = (arrayCards) => {
    let filteredCards = arrayCards
      .filter((card) => card.cardName.match(new RegExp(cardFilters.regExp, 'i')));
    if (cardFilters.rarity) {
      filteredCards = filteredCards.filter(
        (card) => card.cardRare === cardFilters.rarity || cardFilters.rarity === 'todas',
      );
    }
    if (cardFilters.trunfo) {
      filteredCards = filteredCards.filter((card) => card.cardTrunfo === true);
    }
    return filteredCards;
  };

  return (
    <main className="Deck">
      <div className="Deck-container">
        {filterCards(customCards).map((cCard, cIndex) => (
          <Card key={ cIndex } { ...cCard } index={ cIndex } custom />
        ))}
        {filterCards(deckArray).map((card, index) => (
          <Card key={ card.cardName } { ...card } index={ index } />
        ))}
      </div>
    </main>
  );
}

export default Deck;
