import {
  OPEN_LOGIN, OPEN_REGISTRATION, SET_LOGIN_CREDENTIALS, SET_REGISTRATION_CREDENTIALS 
} from '../action/user';

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
  isLoginOpen: true,
  isRegistrationOpen: false,
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

    case SET_REGISTRATION_CREDENTIALS:
      return {
        ...state,
        settingsRegister: {
          ...state.settingsRegister,
          [action.field]: action.value,
        },
      };

    case OPEN_LOGIN:
      return {
        ...state,
        isLoginOpen: true,
        isRegistrationOpen: false,
      };

    case OPEN_REGISTRATION:
      return {
        ...state,
        isLoginOpen: false,
        isRegistrationOpen: true,
      };

    default:
      return state;
  }
};

export default reducer;
