import { UPDATE_CUSTOM_CARD_FORM, SAVE_CUSTOM_CARD, REMOVE_CARD } from '../actions';

const returnSavedCustomCards = () => {
  let savedCustomCards = JSON.parse(localStorage.getItem('Custom Cards'));
  if (!savedCustomCards) savedCustomCards = [];
  return savedCustomCards;
};

const saveCards = (cards) => {
  localStorage.setItem('Custom Cards', JSON.stringify(cards));
  return cards;
};

const removeCard = (index, cards) => {
  if (index === null) return cards;
  const updatedCards = [...cards];
  updatedCards.splice(index, 1);
  saveCards(updatedCards);
  return updatedCards;
};

const INITIAL_STATE = {
  form: {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
  },
  hasTrunfo: returnSavedCustomCards().some((card) => card.cardTrunfo),
  customCards: returnSavedCustomCards(),
};

const customCard = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_CUSTOM_CARD_FORM:
    return {
      ...state,
      form: {
        ...state.form,
        ...action.valueObj,
      },
    };
  case SAVE_CUSTOM_CARD:
    return {
      ...state,
      form: { ...INITIAL_STATE.form },
      hasTrunfo: [...state.customCards, action.card].some((card) => card.cardTrunfo),
      customCards: saveCards([...state.customCards, action.card]),
    };
  case REMOVE_CARD:
    return {
      ...state,
      hasTrunfo: Boolean(!state.customCards[action.index].cardTrunfo),
      customCards: removeCard(action.index, state.customCards),
    };
  default:
    return state;
  }
};

export default customCard;
