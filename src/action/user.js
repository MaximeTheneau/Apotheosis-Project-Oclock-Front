// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_LOGIN_CREDENTIALS = 'SET_LOGIN_CREDENTIALS';

// Action creator => On l'utilise au moment du dispatch()
export function setLoginCredentials(value, field) {
  return {
    type: SET_LOGIN_CREDENTIALS,
    value: value,
    field: field,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_REGISTRATION_CREDENTIALS = 'SET_REGISTRATION_CREDENTIALS';

// Action creator => On l'utilise au moment du dispatch()
export function setRegistrationcredentials(value, field) {
  return {
    type: SET_REGISTRATION_CREDENTIALS,
    value: value,
    field: field,
  };
}

export const OPEN_LOGIN = 'OPEN_LOGIN';

export function openLogin() {
  return {
    type: OPEN_LOGIN,
  };
}

export const OPEN_REGISTRATION = 'OPEN_REGISTRATION';

export function openRegistration() {
  return {
    type: OPEN_REGISTRATION,
  };
}

export const LOGIN = 'LOGIN';

export function login() {
  return {
    type: LOGIN,
  };
}

export const SAVE_USER = 'SAVE_USER';

export function saveUser(user) {
  return {
    type: SAVE_USER,
    user,
  };
}

export const LOGOUT = 'LOGOUT';

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const FETCH_FAVORITES = 'FETCH_FAVORITES';

export function fetchFavorites() {
  return {
    type: FETCH_FAVORITES,
  };
}

export const SAVE_FAVORITES = 'SAVE_FAVORITES';

export function saveFavorites(favorites) {
  return {
    type: SAVE_FAVORITES,
    favorites,
  };
}

export const REDIRECT = 'REDIRECT';

export function redirect(lien) {
  return {
    type: REDIRECT,
    lien,
  };
}

export const AUTH_ERROR = 'AUTH_ERROR';

export function authError(message) {
  return {
    type: AUTH_ERROR,
    message,
  };
}

export const REGISTER = 'REGISTER';

export function register() {
  return {
    type: REGISTER,
  };
}

export const KEEP_LOGIN = 'KEEP_LOGIN';

export function keepLogin(token, logs) {
  return {
    type: KEEP_LOGIN,
    token,
    logs,
  };
}
