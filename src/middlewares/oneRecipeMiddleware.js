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
  submitUsersIdMiams,
} from '../action/oneRecipe';
//  const { id, slug } = useParams();
//  console.log(id);
const onRecipeMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  const { idSlug } = state.oneRecipe;
  const { token } = state.user.settingsLogIn;
  console.log(token);

  // C'est un test mais on ne pourrait pas faire comme ça?

  // const { userIdConnected } = state.user.settingsLogIn.userid;
  // const { usersIdMiamed } = state.oneRecipe.usersId;

  // const { isMiam } = usersIdMiamed.includes(userIdConnected);

  // console.log(isMiam);
  // console.log(idSlug);
  switch (action.type) {
    case FETCH_RECIPE: {
      axios.get(`http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes/${idSlug}`)

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
            // console.log(result);
            // console.log(response.data.recipeIngredients);
            // console.log(resultSteps);
            // console.log(response.data.comments);
            store.dispatch(saveRecipe(result));
            store.dispatch(saveRecipeIngredients(response.data.recipeIngredients));
            store.dispatch(saveRecipeUsersId(response.data.usersId));
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
      // const { isMiam } = state.oneRecipe;
       axios.post(
        `http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes/${idSlug}/miams`,
        {
          miam: true,
        },
        {
          Authorization: `Bearer ${token}`,
        },
        )
        .then((response) => {
          console.log(response);
          
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
