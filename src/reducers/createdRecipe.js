import { INGREDIENTS_ACTION, TITLE_ACTION } from '../action/createdRecipe';

export const initialState = {
  steps: {
    'etape 1': false,
    'etape 2': false,
    'etape 3': false,
    'etape 4': false,
    'etape 5': false,
    'etape 6': false,
    'etape 7': false,
    'etape 8': false,
    'etape 9': false,
  },
  title: '',
  ingredients: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TITLE_ACTION:
      return {
        ...state,
        title: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case INGREDIENTS_ACTION:
      return {
        ...state,
        ingredients: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
