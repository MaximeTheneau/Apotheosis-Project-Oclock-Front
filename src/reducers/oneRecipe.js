import {
  SAVE_RECIPE_USERSID,
  SAVE_RECIPE,
  SAVE_RECIPE_INGREDIENTS,
  SAVE_RECIPE_STEPS,
  SAVE_RECIPE_ID,
  SUBMIT_USERS_ID_MIAMS,
} from '../action/oneRecipe';

export const initialState = {
  list: [],
  ingredients: [],
  steps: [],
  usersId: [],
  recipeId: null,
  isMiam: null,
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
        listIngredients: action.listIngredients,
      };
    case SAVE_RECIPE_STEPS:
      return {
        ...state,
        steps: action.list,
      };
    case SAVE_RECIPE_ID:
      return {
        ...state,
        recipeId: action.recipeId,
      };
    case SAVE_RECIPE_USERSID:
      return {
        ...state,
        usersId: action.usersId,
      };
    case SUBMIT_USERS_ID_MIAMS:
      return {
        ...state,
        isMiam: action.isMiam,
      };
    default:
      return state;
  }
};

export default reducer;
