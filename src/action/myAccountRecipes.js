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
