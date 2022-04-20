import { UPDATE_CUSTOM_CARD_FORM, SAVE_CUSTOM_CARD } from '../actions';

const returnSavedCustomCards = () => {
  let savedCustomCards = JSON.parse(localStorage.getItem('Custom Cards'));
  if (!savedCustomCards) savedCustomCards = [];
  return savedCustomCards;
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
      customCards: [...state.customCards, action.card],
    };
  default:
    return state;
  }
};

export default customCard;
