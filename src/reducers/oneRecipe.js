import { FETCH_RECIPE } from '../action/oneRecipe';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RECIPE:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
