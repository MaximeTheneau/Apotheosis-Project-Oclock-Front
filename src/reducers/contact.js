import { PSEUDO_ACTION } from '../action/contact';

export const initialState = {
  pseudo: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PSEUDO_ACTION:
      return {
        ...state,
        pseudo: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
