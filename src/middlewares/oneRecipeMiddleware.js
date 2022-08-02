import axios from 'axios';
import {
  FETCH_RECIPE,
  saveRecipe,
  saveRecipeIngredients,
  saveRecipeSteps,
  saveComments,
} from '../action/oneRecipe';

const onRecipeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPE: {
      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes/1')
        .then(
          (response) => {
            console.log(response);
            let result = null;
            let resultSteps = null;
            if (Array.isArray(response.data)) {
              result = response.data;
            }
            else {
              result = [response.data];
            }
            if (Array.isArray(response.data.steps)) {
              resultSteps = response.data.steps;
            }
            else {
              resultSteps = [response.data.steps];
            }
            console.log(result);
            console.log(response.data.recipeIngredients);
            console.log(resultSteps);
            console.log(response.data.comments);
            store.dispatch(saveRecipe(result));
            store.dispatch(saveRecipeIngredients(response.data.recipeIngredients));
            store.dispatch(saveRecipeSteps(resultSteps));
            store.dispatch(saveComments(response.data.comments));
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
