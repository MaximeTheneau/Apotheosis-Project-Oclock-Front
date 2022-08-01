import {
  SAVE_RECIPE,
  SAVE_RECIPE_INGREDIENTS,
  VALUE_FILTER_NULL,
  SAVE_RECIPE_STEPS,
} from '../action/oneRecipe';

export const initialState = {
  list: [],
  ingredients: [],
  steps: [],
  valueFilterNull: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        list: action.list,
      };
    case SAVE_RECIPE_INGREDIENTS:
      return {
        ...state,
        ingredients: action.list,
      };
    case SAVE_RECIPE_STEPS:
      return {
        ...state,
        steps: action.list,
      };
    case VALUE_FILTER_NULL:
      return {
        ...state,
        valueFilterNull: !state.valueFilterNull,
      };
    default:
      return state;
  }
};

export default reducer;
