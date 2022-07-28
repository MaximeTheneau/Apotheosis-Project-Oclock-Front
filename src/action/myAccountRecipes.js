export const FETCH_RECIPES = 'FETCH_RECIPES';

export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
  };
}

export const SAVE_RECIPES = 'SAVE_RECIPES';

export function saveRecipes(myAccountRecipes) {
  return {
    type: SAVE_RECIPES,
    list: myAccountRecipes,
  };
}
