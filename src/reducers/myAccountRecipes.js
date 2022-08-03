import { SAVE_RECIPES_MY_ACCOUNT, SAVE_FAVORITES } from '../action/myAccountRecipes';

export const initialState = {
  list: [],
  favorites: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES_MY_ACCOUNT:
      return {
        ...state,
        list: action.list,
      };
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    default:
      return state;
  }
};

export default reducer;
