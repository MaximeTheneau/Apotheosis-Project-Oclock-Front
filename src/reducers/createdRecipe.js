import { DIFFICULTY_ACTION, INGREDIENTS_ACTION, TITLE_ACTION, TYPE_ACTION } from '../action/createdRecipe';

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
  types: '',

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

    case TYPE_ACTION:
      return {
        ...state,
        types: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case DIFFICULTY_ACTION:
      return {
        ...state,
        diffuculty: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
