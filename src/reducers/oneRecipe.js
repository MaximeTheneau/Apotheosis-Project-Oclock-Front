import {
  SAVE_RECIPE,
  SAVE_RECIPE_INGREDIENTS,
  SAVE_RECIPE_STEPS,
  SAVE_COMMENTS,
} from '../action/oneRecipe';

export const initialState = {
  list: [],
  ingredients: [],
  steps: [],
  comments: [],
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
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
