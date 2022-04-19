import deckArray from '../../data/deck-data';
import { SELECT_CARD, SHUFFLE_CARDS } from '../actions';

const INITIAL_STATE = {
  deck: deckArray,
  playerHand: [],
  cpuHand: [],
};

const shuffleCards = (deck) => {
  const handCards = 6;
  const shuffle = 0.5;

  return [...deck]
    .sort(() => Math.random() - shuffle)
    .slice(0, handCards);
};

const removeSelectedCard = (selectedCard, hand) => {
  const updatedHand = [...hand];
  let selectedCardIndex;

  hand.forEach((card, index) => {
    if (card.id === selectedCard.id) {
      selectedCardIndex = index;
    }
  });

  updatedHand.splice(selectedCardIndex, 1);

  return updatedHand;
};

const deck = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SHUFFLE_CARDS:
    return {
      ...state,
      playerHand: shuffleCards(state.deck),
      cpuHand: shuffleCards(state.deck),
    };
  case SELECT_CARD:
    return {
      ...state,
      playerHand: removeSelectedCard(action.playerCard, state.playerHand),
      cpuHand: removeSelectedCard(action.cpuCard, state.cpuHand),
    };
  default:
    return state;
  }
};

export default deck;
