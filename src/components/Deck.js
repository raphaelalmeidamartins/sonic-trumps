import React from 'react';
import deckArray from '../data/deck-data';
import Card from './Card';
import '../sass/components/Deck.css';

function Deck() {
  return (
    <main className="Deck">
      <div className="Deck-container">
        {deckArray.map((card) => (
          <Card key={ card.cardName } { ...card } />
        ))}
      </div>
    </main>
  );
}

export default Deck;
