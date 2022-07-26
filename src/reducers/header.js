import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../action/header';

export const initialState = {
  isOpen: false,
  settingsRegister: {
    isRegister: false,
    pseudo: '',
    email: '',
    password: '',
    confirmedPassword: '',
  },
  settingsSignIn: {
    isSignIn: false,
    speudo: '',
    email: '',
    password: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        isOpen: true,
      };

    case HIDE_SIDEBAR:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
