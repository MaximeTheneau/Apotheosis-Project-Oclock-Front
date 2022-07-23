// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_RECIPES = 'FETCH_RECIPES';

// Action creator => On l'utilise au moment du dispatch()
export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SAVE_RECIPES = 'SAVE_RECIPES';

// Action creator => On l'utilise au moment du dispatch()
export function saveRecipes(recipes) {
  return {
    type: SAVE_RECIPES,
    list: recipes,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_SETTINGS_FIELD = 'SET_SETTINGS_FIELD';

// Action creator => On l'utilise au moment du dispatch()
export function setSettingsField(value, field) {
  return {
    type: SET_SETTINGS_FIELD,
    value: value,
    field: field,
  };
}
// Action Type => On l'utilise dans l'action creator ET dans le reducer/middleware
export const SUBMIT_VALUE = 'submitValue';

// Action creator => On l'utilise au moment du dispatch()
export function submitValue() {
  return {
    type: SUBMIT_VALUE,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const VALUE_TOOGLE = 'VALUE_TOOGLE';

// Action creator => On l'utilise au moment du dispatch()
export function valueToogle() {
  return {
    type: VALUE_TOOGLE,
  };
}
