import React from 'react';
import websites from '../data/deck-data';
import Card from './Card';

function Deck() {
  return (
    <main>
      {websites.map((card) => (
        <Card key={ card.cardName } { ...card } />
      ))}
    </main>
  );
}

export default Deck;
