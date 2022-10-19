import axios from 'axios';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import {
  FETCH_RECIPE,
  saveRecipe,
  saveRecipeIngredients,
  saveRecipeSteps,
  saveComments,
  SUBMIT_USERS_ID_MIAMS,
  saveRecipeUsersId,
  COMMENT_CREACTED,
  submitUsersIdMiams,
  fetchRecipe,
  saveMiam,
} from '../action/oneRecipe';
//  const { id, slug } = useParams();
//  console.log(id);
const onRecipeMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  const { idSlug } = state.oneRecipe;
  const { token } = localStorage;

  switch (action.type) {
    case FETCH_RECIPE: {
      axios.get(`https://back-omiam.unetaupechezvous.fr/public/api/recipes/${idSlug}`)

        .then(
          (response) => {
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
            const { nbMiams } = response.data;
            console.log(nbMiams);
            // console.log(response.data.recipeIngredients);
            // console.log(resultSteps);
            // console.log(response.data.comments);
            store.dispatch(saveRecipe(result));
            store.dispatch(saveMiam(nbMiams));
            store.dispatch(saveRecipeIngredients(response.data.recipeIngredients));
            store.dispatch(submitUsersIdMiams(response.data.usersId));
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
    case SUBMIT_USERS_ID_MIAMS: {
      const { nbMiam } = state.oneRecipe;
      const headers = { Authorization: `Bearer ${token}` };
       axios.get(
        `https://back-omiam.unetaupechezvous.fr/public/api/recipes/${idSlug}/miams`,

        { headers },
        )
        .then((response) => {
          console.log(response);

          // window.location = `/recette/${idSlug}/${recipe.slug}`;
          
          // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          return next(action);
        })
        .catch((error) => {
          console.log(error);

          return next(action);
        });

      return next(action);
    }
    case COMMENT_CREACTED: {
      const { commentValue } = state.oneRecipe.comment;
      const recipe = state.oneRecipe.list[0];

      console.log(recipe.slug);
      const headers = { Authorization: `Bearer ${token}` };
      axios.post(
        `https://back-omiam.unetaupechezvous.fr/public/api/recipes/${idSlug}/comments`,
        { content: commentValue },
        { headers },
      )
        .then((response) => {
          console.log(response);
          window.location = `/recette/${idSlug}/${recipe.slug}`;
          // axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          return next(action);
        })
        .catch((error) => {
          console.log(error);

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
