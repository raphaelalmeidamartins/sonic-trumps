import { combineReducers } from 'redux';
import customCard from './customCard';
import deck from './deck';
import game from './game';

const rootReducer = combineReducers({ game, deck, customCard });

export default rootReducer;
