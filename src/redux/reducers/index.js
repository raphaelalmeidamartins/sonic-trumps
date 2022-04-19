import { combineReducers } from 'redux';
import deck from './deck';
import game from './game';
import player from './player';

const rootReducer = combineReducers({ player, game, deck });

export default rootReducer;
