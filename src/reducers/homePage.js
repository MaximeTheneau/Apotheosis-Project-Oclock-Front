import {
  SAVE_RECIPES,
  SET_SETTINGS_FIELD,
  TOGGLE_SPINNER,
  VALUE_TOOGLE,
} from '../action/homePage';

export const initialState = {
  listHome: [],
  form: {
    search: '',
  },
  addCards: false,
  toggleSpinner: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        listHome: action.listHome,
      };
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
