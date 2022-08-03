import { NB_MIAMS, NB_MIAMS_COUNT, SAVE_RECIPE_NBMIAMS } from '../action/nbMiams';

export const initialState = {
  nbMiamsCount: null,
  nbMiamsTrue: false,
  userId:[],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NB_MIAMS:
      return {
        ...state,
        nbMiamsTrue: !state.nbMiamsTrue,
      };
    case NB_MIAMS_COUNT:
      return {
        ...state,
        nbMiamsCount: !state.nbMiams + 1,
      };

    default:
      return state;
  }
};
export default reducer;