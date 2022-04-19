import md5 from 'crypto-js/md5';
import { GET_SAVED_PLAYER_DATA, UPDATE_PLAYER_DATA } from '../actions';

const INITIAL_STATE = {
  playerName: '',
  gravatarEmail: '',
  gravatar: 'https://www.gravatar.com/avatar/',
};

const persistPlayerData = (state, name, value) => {
  const updatedState = {
    ...state,
    [name]: value,
  };

  sessionStorage.setItem('player profile', JSON.stringify(updatedState));

  return updatedState;
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_PLAYER_DATA:
    return persistPlayerData(state, action.name, action.value);
  case GET_SAVED_PLAYER_DATA:
    return {
      ...action.playerData,
      gravatar: INITIAL_STATE.gravatar + md5(state.gravatarEmail).toString(),
    };
  default:
    return state;
  }
};

export default player;
