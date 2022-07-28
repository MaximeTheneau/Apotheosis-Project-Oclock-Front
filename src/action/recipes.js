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
