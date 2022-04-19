import { RESET_GAME, SELECT_ATTRIBUTE, SELECT_CARD } from '../actions';

const attributes = ['DA', 'TB', 'MT', 'Alexa', 'IX'];

const INITIAL_STATE = {
  currRound: 1,
  cpuTurn: false,
  rounds: 6,
  attributes,
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
  default:
    return state;
  }
};

export default game;