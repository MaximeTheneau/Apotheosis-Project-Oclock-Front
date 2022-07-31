import { SET_SETTINGS_FIELD, TOGGLE_SPINNER, VALUE_TOOGLE } from '../action/homePage';

export const initialState = {
  list: [],
  form: {
    search: '',
  },
  addCards: false,
  toggleSpinner: false,
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
        addCards: !state.addCards,
      };
    case TOGGLE_SPINNER:
      return {
        ...state,
        toggleSpinner: !state.toggleSpinner,
      };

    default:
      return state;
  }
};

export default reducer;
