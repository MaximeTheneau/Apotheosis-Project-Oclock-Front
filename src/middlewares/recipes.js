import axios from 'axios';
import { FETCH_RECIPES, saveRecipes } from '../action/recipes';
import data from '../data/recipes';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const recipesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      axios.get(data)
        .then(
          (response) => {
            // Ici on recup bien les données de notre API (les recettes)
            // On veut maintenant les rajouter dans le state
            // Pour ça on va dispatcher une action (l'intention de mémoriser les recettes)
            store.dispatch(saveRecipes(response.data));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      return next(action);
    }
    default:
      return next(action);
  }
};

export default recipesMiddleware;
