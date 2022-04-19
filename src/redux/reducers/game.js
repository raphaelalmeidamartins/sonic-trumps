import { RESET_GAME, SELECT_ATTRIBUTE, SELECT_CARD, HIDE_PLAYER_HAND, DISPLAY_PLAYER_HAND } from '../actions';

const attributes = ['currAttr1', 'currAttr2', 'currAttr3'];

const attributeNames = {
  currAttr1: 'SPEED',
  currAttr2: 'SKILL',
  currAttr3: 'POWER',
};

const INITIAL_STATE = {
  currRound: 1,
  cpuTurn: false,
  rounds: 6,
  attributes,
  attributeNames,
  currAttr: attributes[0],
  playerCard: null,
  wins: 0,
  cpuCard: null,
  cpuWins: 0,
  didPlayerWinRound: false,
  draw: false,
  displayHand: false,
  displayDuel: false,
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RESET_GAME:
    return INITIAL_STATE;
  case SELECT_ATTRIBUTE:
    return {
      ...state,
      currAttr: action.value,
    };
  case SELECT_CARD:
    return {
      ...state,
      playerCard: action.playerCard,
      cpuCard: action.cpuCard,
      currRound: state.currRound + 1,
      cpuTurn: !state.cpuTurn,
      wins: state.wins + action.wins,
      cpuWins: state.cpuWins + action.cpuWins,
      didPlayerWinRound: Boolean(action.wins),
      draw: action.wins === action.cpuWins,
    };
  case HIDE_PLAYER_HAND:
    return {
      ...state,
      displayHand: false,
    };
  case DISPLAY_PLAYER_HAND:
    return {
      ...state,
      displayHand: true,
    };
  default:
    return state;
  }
};

export default game;
