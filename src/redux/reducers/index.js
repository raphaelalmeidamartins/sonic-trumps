import { combineReducers } from 'redux';
import customCard from './customCard';
import deck from './deck';
import game from './game';
import player from './player';

const rootReducer = combineReducers({ player, game, deck, customCard });

export default rootReducer;
