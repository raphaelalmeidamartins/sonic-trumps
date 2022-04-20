// Create the actions here
const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
const RESET_GAME = 'RESET_GAME';
const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';
const SELECT_CARD = 'SELECT_CARD';
const HIDE_PLAYER_HAND = 'HIDE_PLAYER_HAND';
const DISPLAY_PLAYER_HAND = 'DISPLAY_PLAYER_HAND';
const DISPLAY_DUEL = 'DISPLAY_DUEL';
const NEXT_ROUND = 'NEXT_ROUND';
const UPDATE_CUSTOM_CARD_FORM = 'UPDATE_CUSTOM_CARD_FORM';
const SAVE_CUSTOM_CARD = 'SAVE_CUSTOM_CARD';
const REMOVE_CARD = 'REMOVE_CARD';

const actionShuffleCards = () => ({
  type: SHUFFLE_CARDS,
});

const actionResetGame = () => ({
  type: RESET_GAME,
});

const actionSelectAttribute = (value) => ({
  type: SELECT_ATTRIBUTE,
  value,
});

const actionSelectCard = (playerCard, cpuCard, currAttr) => ({
  type: SELECT_CARD,
  playerCard,
  cpuCard,
  currAttr,
  wins:
      playerCard[currAttr] > cpuCard[currAttr] ? 1 : 0,
  cpuWins:
      playerCard[currAttr] < cpuCard[currAttr] ? 1 : 0,
});

const actionHidePlayerHand = () => ({
  type: HIDE_PLAYER_HAND,
});

const actionDisplayPlayerHand = () => ({
  type: DISPLAY_PLAYER_HAND,
});

const actionDisplayDuel = () => ({
  type: DISPLAY_DUEL,
});

const actionNextRound = () => ({
  type: NEXT_ROUND,
});

const actionUpdateCustomCardForm = (valueObj) => ({
  type: UPDATE_CUSTOM_CARD_FORM,
  valueObj,
});

const actionSaveCustonCard = (card) => ({
  type: SAVE_CUSTOM_CARD,
  card,
});

const actionRemoveCard = (index) => ({
  type: REMOVE_CARD,
  index,
});

export {
  SHUFFLE_CARDS,
  actionShuffleCards,
  RESET_GAME,
  actionResetGame,
  SELECT_ATTRIBUTE,
  actionSelectAttribute,
  SELECT_CARD,
  actionSelectCard,
  HIDE_PLAYER_HAND,
  actionHidePlayerHand,
  DISPLAY_PLAYER_HAND,
  actionDisplayPlayerHand,
  DISPLAY_DUEL,
  actionDisplayDuel,
  NEXT_ROUND,
  actionNextRound,
  UPDATE_CUSTOM_CARD_FORM,
  actionUpdateCustomCardForm,
  SAVE_CUSTOM_CARD,
  actionSaveCustonCard,
  REMOVE_CARD,
  actionRemoveCard,
};
