import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

function PlayerHand() {
  const playerHand = useSelector((state) => state.deck.playerHand);

  return (
    <div>
      {playerHand.map((card) => (
        <Card key={ card.id } { ...card } hand />
      ))}
    </div>
  );
}

export default PlayerHand;
