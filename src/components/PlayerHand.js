import React from 'react';
import { useSelector } from 'react-redux';
import CardMini from './CardMini';

function PlayerHand() {
  const playerHand = useSelector((state) => state.deck.playerHand);

  return (
    <div>
      {playerHand.map((card) => (
        <CardMini key={ card.id } { ...card } hand />
      ))}
    </div>
  );
}

export default PlayerHand;
