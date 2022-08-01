import {
  SAVE_RECIPE,
  SAVE_RECIPE_INGREDIENTS,
  SAVE_RECIPE_STEPS,
} from '../action/oneRecipe';

export const initialState = {
  list: [],
  ingredients: [],
  steps: [],
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
    default:
      return state;
  }
};

export default reducer;
