import { combineReducers } from 'redux';
import customCard from './customCard';
import deck from './deck';
import game from './game';
import cardFilters from './cardFilters';

const rootReducer = combineReducers({ game, deck, customCard, cardFilters });

export default rootReducer;
