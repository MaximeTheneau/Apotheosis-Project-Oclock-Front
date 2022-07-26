import { ADD_ETAPE } from '../action/createdRecipe';

export const initialState = {
  step: {
      etape1:"false",
      etape2:"false",

  }
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ETAPE:
        return {
          ...state,
          step: {
            etape1: !state.etape1,
          },
        };
    default:
      return state;
  }
};

export default reducer;
