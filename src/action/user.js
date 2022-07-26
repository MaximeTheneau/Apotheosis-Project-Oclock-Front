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
