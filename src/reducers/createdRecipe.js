import { DIFFICULTY_ACTION, DURATION_ACTION, ETAPE2_ACTION, ETAPE3_ACTION, ETAPE4_ACTION, ETAPE5_ACTION, ETAPE6_ACTION, ETAPE7_ACTION, ETAPE8_ACTION, ETAPE9_ACTION, ETAPE_ACTION, INGREDIENT_ACTION, POST_CREACTED, QUANTITY_ACTION, TITLE_ACTION, TYPE_ACTION, UNIT_ACTION } from '../action/createdRecipe';

export const initialState = {

  title: '',
  caption: '',
  steps: {
    etape1: '',
    etape2: '',
    etape3: '',
    etape4: '',
    etape5: '',
    etape6: '',
    etape7: '',
    etape8: '',
    etape9: '',
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
    case ETAPE_ACTION:
      return {
        ...state,
        steps: {
          ...state.steps,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
