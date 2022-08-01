import { SAVE_RECIPES_LAST, SAVE_RECIPES_MIAMS, SAVE_RECIPES_RANDOM, SET_SETTINGS_FIELD, TOGGLE_SPINNER, VALUE_TOOGLE } from '../action/homePage';

export const initialState = {
  listHomeLast: [],
  listHomeMiams: [],
  listHomeRandom: [],
  recipes: [],
  form: {
    search: '',
  },
  addCards: false,
  toggleSpinner: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES_LAST:
      return {
        ...state,
        listHomeLast: action.listHomeLast,
      };
    case SAVE_RECIPES_MIAMS:
      return {
        ...state,
        listHomeMiams: action.listHomeMiams,
      };
    case SAVE_RECIPES_RANDOM:
      return {
        ...state,
        listHomeRandom: action.listHomeRandom,
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
