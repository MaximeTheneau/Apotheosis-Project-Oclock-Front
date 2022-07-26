import { SET_LOGIN_CREDENTIALS } from '../action/user';

export const initialState = {
  settingsRegister: {
    isRegister: false,
    pseudo: '',
    email: '',
    password: '',
    confirmedPassword: '',
  },
  settingsLogIn: {
    isSignIn: false,
    email: '',
    password: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_CREDENTIALS:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          [action.field]: action.value,
        },
      };

    default:
      return state;
  }
};

export default reducer;
