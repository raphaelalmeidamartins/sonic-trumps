// Create the actions here
const UPDATE_PLAYER_DATA = 'UPDATE_PLAYER_DATA';
const GET_SAVED_PLAYER_DATA = 'GET_SAVED_PLAYER_DATA';
const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
const RESET_GAME = 'RESET_GAME';
const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';
const SELECT_CARD = 'SELECT_CARD';
const HIDE_PLAYER_HAND = 'HIDE_PLAYER_HAND';
const DISPLAY_PLAYER_HAND = 'DISPLAY_PLAYER_HAND';
const DISPLAY_DUEL = 'DISPLAY_DUEL';
const NEXT_ROUND = 'NEXT_ROUND';

const actionUpdatePlayerData = (name, value) => ({
  type: UPDATE_PLAYER_DATA,
  name,
  value,
});

const actionGetSavedPlayerData = (playerData) => ({
  type: GET_SAVED_PLAYER_DATA,
  playerData,
});

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

export {
  UPDATE_PLAYER_DATA,
  actionUpdatePlayerData,
  SHUFFLE_CARDS,
  actionShuffleCards,
  GET_SAVED_PLAYER_DATA,
  actionGetSavedPlayerData,
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
};
