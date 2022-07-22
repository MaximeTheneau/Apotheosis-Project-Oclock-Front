import { SET_SETTINGS_FIELD } from '../action/recipes';

export const initialState = {
  list: [],
  form: {
    search: '',
    addCards: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SETTINGS_FIELD:
      return {
        ...state,
        form: {
          ...state.settings,
          [action.field]: action.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
