import axios from 'axios';
import { FETCH_RECIPES, saveRecipesLast, saveRecipesMiams, saveRecipesRandom } from '../action/homePage';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const homePage = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/home')
        .then(
          (response) => {
            // console.log(response.data.miamsRecipes);
            store.dispatch(saveRecipesLast([response.data]));
            // console.log(result);
          },
        );
      return next(action);
    }
    default:
      return next(action);
  }
};

export default homePage;