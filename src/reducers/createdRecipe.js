import { CAPTION_ACTION, DIFFICULTY_ACTION,
  DURATION_ACTION,
  ETAPE_ACTION,
  INGREDIENT_ACTION,
  QUANTITY_ACTION, TITLE_ACTION,
  TOOGLE_STEPS,
  TOOGLE_STEPS2,
  TOOGLE_STEPS3,
  TOOGLE_STEPS4,
  TOOGLE_STEPS5,
  TOOGLE_STEPS6,
  TOOGLE_STEPS7,
  TOOGLE_STEPS8,
  TOOGLE_STEPS9,
  TYPE_ACTION, UNIT_ACTION
} from '../action/createdRecipe';

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
  toogle: false,
  toogle3: false,
  toogle4: false,
  toogle5: false,
  toogle6: false,
  toogle7: false,
  toogle8: false,
  toogle9: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TITLE_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case CAPTION_ACTION:
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
    case TOOGLE_STEPS:
      return {
        ...state,
        toogle2: !state.toogle2,
      };
    case TOOGLE_STEPS2:
      return {
        ...state,
        toogle3: !state.toogle3,
      };
    case TOOGLE_STEPS3:
      return {
        ...state,
        toogle4: !state.toogle4,
      };
    case TOOGLE_STEPS4:
      return {
        ...state,
        toogle5: !state.toogle5,
      };
    case TOOGLE_STEPS5:
      return {
        ...state,
        toogle6: !state.toogle6,
      };
    case TOOGLE_STEPS6:
      return {
        ...state,
        toogle7: !state.toogle7,
      };
    case TOOGLE_STEPS7:
      return {
        ...state,
        toogle8: !state.toogle8,
      };
    case TOOGLE_STEPS8:
      return {
        ...state,
        toogle9: !state.toogle9,
      };
    case TOOGLE_STEPS9:
      return {
        ...state,
        toogle9: !state.toogle9,

      };
    default:
      return state;
  }
};

export default reducer;
