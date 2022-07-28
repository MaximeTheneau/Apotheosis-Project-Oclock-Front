import { SAVE_RECIPES_MY_ACCOUNT } from '../action/myAccountRecipes';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES_MY_ACCOUNT:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
