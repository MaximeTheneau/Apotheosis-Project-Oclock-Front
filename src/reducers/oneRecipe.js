import { SAVE_RECIPE, SAVE_RECIPE_INGREDIENTS } from '../action/oneRecipe';

export const initialState = {
  list: [],
  ingredients: [],
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
    default:
      return state;
  }
};

export default reducer;
