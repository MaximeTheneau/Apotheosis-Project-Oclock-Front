import {
  OPEN_LOGIN, OPEN_REGISTRATION, SET_LOGIN_CREDENTIALS, SET_REGISTRATION_CREDENTIALS,
  LOGOUT, SAVE_USER, SAVE_FAVORITES, AUTH_ERROR, KEEP_LOGIN,
} from '../action/user';

export const initialState = {
  settingsRegister: {
    isRegister: false,
    pseudo: '',
    email: '',
    password: '',
    confirmedPassword: '',
    avatar: '',
    signinError: {
      validPassword: false,
      errorMessagePassword: '',
      validEmail: false,
      errorMessageEmail: '',
      validMatch: false,
      errorMessagematchPassword: '',
    },
  },
  settingsLogIn: {
    logs: false,
    email: '',
    password: '',
    userid: '',
    pseudo: '', // Renvoyé par l'API
    avatar: '', // Renvoyé par l'API
    token: '', // Renvoyé par l'API
  },
  isLoginOpen: true,
  isRegistrationOpen: false,
  auth: {
    error: false,
    errorMessage: '',
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

    case LOGOUT:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          logs: false,
          pseudo: '',
          avatar: '',
          token: '',
          userid: '',
          favorites: [],
        },
      };

    case SAVE_USER:
      return {
        ...state,
        settingsLogIn: {
          ...action.user,
          email: '',
          password: '',
        },
        auth: {
          error: false,
          errorMessage: '',
        },
      };

    case AUTH_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };

    case KEEP_LOGIN:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          logs: action.logs,
          token: action.token,
        },
      };

    default:
      return state;
  }
};

export default reducer;
