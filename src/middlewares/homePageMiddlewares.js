import axios from 'axios';
import {
  FETCH_RECIPES,
  FETCH_RECIPES_CATEGORY,
  saveRecipesLast,
  saveRecipesMiams,
  saveRecipesRandom,
  saveRecipesCategory,
  toggleSpinner,
} from '../action/homePage';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const homePage = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      axios.get('https://back-omiam.unetaupechezvous.fr/public/api/home')
        .then(
          (response) => {
            console.log(response);
            console.log(response.data.lastRecipes);
            store.dispatch(saveRecipesLast(response.data.lastRecipes));
            store.dispatch(saveRecipesMiams(response.data.miamsRecipes));
            store.dispatch(saveRecipesRandom(response.data.randomRecipes));
          },
        );
      return next(action);
    }
    case FETCH_RECIPES_CATEGORY: {
      const state = store.getState();
      const { categoryId } = state.homePage;
      console.log(categoryId);
      axios.get(`https://back-omiam.unetaupechezvous.fr/public/api/recipes/categories/${categoryId}/search?query=`)
        .then(
          (response) => {
            console.log(response.data);
            store.dispatch(saveRecipesCategory(response.data));
          }).finally(() => {
            // dans tous les cas : error ou succes
            console.log('finally : succes ou fail, je passe par ici');
            // ici on passe isLoading à false pour enlever l'affichage du spinner
            // que la requette se soit bien passée ou non !
            store.dispatch(toggleSpinner(true));
          });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default homePage;
