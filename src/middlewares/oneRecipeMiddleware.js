import axios from 'axios';
import { FETCH_RECIPE, saveRecipe } from '../action/oneRecipe';

const onRecipeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPE: {
      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes/1')
        .then(
          (response) => {
            console.log(response);
            let result = null;
            if (Array.isArray(response.data)) {
              result = response.data;
            }
            else {
              result = [response.data];
            }
            console.log(result);
            store.dispatch(saveRecipe(result));
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

export default onRecipeMiddleware;

/*
let result = response.data;
        if (!Array.isArray(response.data)){
            result = [response.data];
        }
*/
