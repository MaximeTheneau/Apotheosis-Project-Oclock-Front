import axios from 'axios';
import { useParams } from 'react-router';
// import { findRecipe } from 'src/selectors/recipes';

import {
  saveRecipeUsersId,
  FETCH_RECIPE,
  saveRecipe,
  saveRecipeIngredients,
  saveRecipeSteps,
  SUBMIT_USERS_ID_MIAMS,
  saveRecipeId,
} from '../action/oneRecipe';

const onRecipeMiddleware = (store) => (next) => (action) => {
  // On utilise le destructuring pour extraire le param slug
  switch (action.type) {
    case FETCH_RECIPE: {
      axios.get(`http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes/`)
        .then(
          (response) => {
            // console.log(store.onRecipe.id);


            // console.log(response);
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
            // console.log(response.data.recipeIngredients);
            // console.log(resultSteps);
            store.dispatch(saveRecipe(result));
            store.dispatch(saveRecipeIngredients(response.data.recipeIngredients));
            store.dispatch(saveRecipeUsersId(response.data.usersId));
            store.dispatch(saveRecipeId(response.data.id));
            store.dispatch(saveRecipeSteps(resultSteps));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      return next(action);
    }
    case SUBMIT_USERS_ID_MIAMS: {
      axios.post(
        `http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes/${id}/miams`,
        'miam',
      )
        .then((response) => {
          axios.defaults.headers.common.Authorization = `Bearer ${user.token}`;
          // - Save the JWT in localStorage
          localStorage.setItem('token', user.token);
          localStorage.setItem('userid', user.userid);
          localStorage.setItem('avatar', user.avatar);
          localStorage.setItem('role', user.role);
          localStorage.setItem('logs', true);
          localStorage.setItem('pseudo', user.pseudo);

          // Redirect of the user towards to home page
          //store.dispatch(redirect('/'));
          window.location = '/';

          // On mémorise l'utilisateur dans le state
          store.dispatch(saveUser(user));

          return next(action);
        })
        .catch((error) => {
          console.log(error);

          store.dispatch(authError('Email ou mot de passe incorrect'));

          return next(action);
        });

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
