export const FETCH_RECIPES_MY_ACCOUNT = 'FETCH_RECIPES_MY_ACCOUNT';

export function fetchRecipesMyAccount() {
  return {
    type: FETCH_RECIPES_MY_ACCOUNT,
  };
}

export const SAVE_RECIPES_MY_ACCOUNT = 'SAVE_RECIPES_MY_ACCOUNT';

export function saveRecipesMyAccount(myAccountRecipes) {
  return {
    type: SAVE_RECIPES_MY_ACCOUNT,
    list: myAccountRecipes,
  };
}