import { DIFFICULTY_ACTION, DURATION_ACTION, INGREDIENT_ACTION, QUANTITY_ACTION, TITLE_ACTION, TYPE_ACTION, UNIT_ACTION } from '../action/createdRecipe';

export const initialState = {

  title: '',
  caption: '',
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
  duration: '',
  diffuculty: '',
  category: '',
  recipeIngredients: {
    ingredient: '',
    unit: '',
    quantity: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TITLE_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case TYPE_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case DIFFICULTY_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case DURATION_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case INGREDIENT_ACTION:
      return {
        ...state,
        recipeIngredients: {
          ...state.recipeIngredients,
          [action.field]: action.value,
        },
      };
    case UNIT_ACTION:
      return {
        ...state,
        recipeIngredients: {
          ...state.recipeIngredients,
          [action.field]: action.value,
        },
      };
    case QUANTITY_ACTION:
      return {
        ...state,
        recipeIngredients: {
          ...state.recipeIngredients,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
