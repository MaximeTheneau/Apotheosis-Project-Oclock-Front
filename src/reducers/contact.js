import { SET_NEW_CONTACT_MSG_CONTENT } from '../action/contact';

export const initialState = {
  form: {
    pseudo: '',
    email: '',
    topic: '',
    message: '',
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
    default:
      return state;
  }
};

export default reducer;
