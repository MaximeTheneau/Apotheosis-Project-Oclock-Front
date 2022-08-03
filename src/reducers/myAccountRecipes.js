import { SAVE_RECIPES_MY_ACCOUNT, SAVE_FAVORITES_MIAMS, SAVE_USER_ID } from '../action/myAccountRecipes';

export const initialState = {
  list: [],
  favorites: [],
  userid: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES_MY_ACCOUNT:
      return {
        ...state,
        list: action.list,
      };
    case SAVE_FAVORITES_MIAMS:
      return {
        ...state,
        favorites: action.favorites,
      };
    case SAVE_USER_ID:
      return {
        ...state.user.settingsLogIn,
        userid: '',
      };
    default:
      return state;
  }
};

export default reducer;
