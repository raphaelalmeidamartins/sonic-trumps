import React from 'react';
import { useSelector } from 'react-redux';
import deckArray from '../data/deck-data';
import '../sass/components/Deck.css';
import Card from './Card';

function Deck() {
  const customCards = useSelector((state) => state.customCard.customCards);

  return (
    <main className="Deck">
      <div className="Deck-container">
        {customCards.map((cCard, cIndex) => (
          <Card key={ cIndex } { ...cCard } index={ cIndex } custom />
        ))}
        {deckArray.map((card, index) => (
          <Card key={ card.cardName } { ...card } index={ index } />
        ))}
      </div>
    </main>
  );
}

export default Deck;
