import { SET_NEW_CONTACT_MSG_CONTENT, SET_SETTINGS_FIELD } from '../action/contact';

export const initialState = {
  settings: {
    pseudo: '',
  },
  currentMessageContactValue: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_CONTACT_MSG_CONTENT:
      return {
        ...state,
        currentMessageContactValue: action.value,
      };
    case SET_SETTINGS_FIELD:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
