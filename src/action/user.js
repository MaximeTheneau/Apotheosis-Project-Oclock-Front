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
