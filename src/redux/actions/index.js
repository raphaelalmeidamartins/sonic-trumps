// Create the actions here
const UPDATE_PLAYER_DATA = 'UPDATE_PLAYER_DATA';
const GET_SAVED_PLAYER_DATA = 'GET_SAVED_PLAYER_DATA';
const SHUFFLE_CARDS = 'SHUFFLE_CARDS';
const RESET_GAME = 'RESET_GAME';
const SELECT_ATTRIBUTE = 'SELECT_ATTRIBUTE';
const SELECT_CARD = 'SELECT_CARD';

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
    playerCard.attributes[currAttr] > cpuCard.attributes[currAttr] ? 1 : 0,
  cpuWins:
    playerCard.attributes[currAttr] < cpuCard.attributes[currAttr] ? 1 : 0,
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
};
