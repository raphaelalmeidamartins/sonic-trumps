const INITIAL_STATE = {
  regExp: '',
  rarity: '',
  trunfo: false,
};

const cardFilters = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return {
      ...state,
      [action.name]: action.value,
    };
  }
};

export default cardFilters;
