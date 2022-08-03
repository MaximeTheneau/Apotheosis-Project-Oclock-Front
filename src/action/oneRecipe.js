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
    listIngredients: oneRecipeIngredients,
  };
}
export const SAVE_RECIPE_STEPS = 'SAVE_RECIPE_STEPS';

export function saveRecipeSteps(oneRecipeSteps) {
  return {
    type: SAVE_RECIPE_STEPS,
    list: oneRecipeSteps,
  };
}

export const SAVE_RECIPE_USERSID = 'SAVE_RECIPE_USERSID';

export function saveRecipeUsersId(oneRecipeUsers) {
  return {
    type: SAVE_RECIPE_USERSID,
    usersId: oneRecipeUsers,
  };
}
export const SUBMIT_USERS_ID_MIAMS = 'SUBMIT_USERS_ID_MIAMS';

export function submitUsersIdMiams(valueMiam) {
  return {
    type: SUBMIT_USERS_ID_MIAMS,
    isMiam: valueMiam,
  };
}
export const SAVE_RECIPE_ID = 'SAVE_RECIPE_ID';

export function saveRecipeId(valueId) {
  return {
    type: SAVE_RECIPE_ID,
    recipeId: valueId,

  };
}