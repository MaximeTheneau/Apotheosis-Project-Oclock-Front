export const FETCH_RECIPE = 'FETCH_RECIPE';

export function fetchRecipe() {
  return {
    type: FETCH_RECIPE,
  };
}

export const SAVE_RECIPE = 'SAVE_RECIPE';

export function saveRecipe(recipe) {
  return {
    type: SAVE_RECIPE,
    list: recipe,
  };
}
