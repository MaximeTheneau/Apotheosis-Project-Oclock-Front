export const FETCH_RECIPE = 'FETCH_RECIPE';

export function fetchRecipe() {
  return {
    type: FETCH_RECIPE,
  };
}

export const SAVE_RECIPE = 'SAVE_RECIPE';

export function saveRecipe(oneRecipe) {
  return {
    type: SAVE_RECIPE,
    list: oneRecipe,
  };
}

export const SAVE_RECIPE_INGREDIENTS = 'SAVE_RECIPE_INGREDIENTS';

export function saveRecipeIngredients(oneRecipeIngredients) {
  return {
    type: SAVE_RECIPE_INGREDIENTS,
    list: oneRecipeIngredients,
  };
}
export const SAVE_RECIPE_STEPS = 'SAVE_RECIPE_STEPS';

export function saveRecipeSteps(oneRecipeSteps) {
  return {
    type: SAVE_RECIPE_STEPS,
    list: oneRecipeSteps,
  };
}
