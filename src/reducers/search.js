import { SET_SETTINGS_FIELD, VALUE_TOOGLE } from '../action/recipes';

export const initialState = {
  list: [],
  form: {
    search: '',
  },
  addCards: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SETTINGS_FIELD:
      return {
        ...state,
        form: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case VALUE_TOOGLE:
      return {
        ...state,
        form: {
          ...state.settings,
        },
        addCards: true,
      };

    default:
      return state;
  }
};

export default reducer;
