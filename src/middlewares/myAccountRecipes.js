import axios from 'axios';
import {
  FETCH_RECIPES_MY_ACCOUNT,
  saveRecipesMyAccount,
  FETCH_FAVORITES_MIAMS,
  saveFavoritesMiams,
  SAVE_USER_ID,
  saveUserID,
} from '../action/myAccountRecipes';

const axiosInstance = axios.create({
  baseURL: 'http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/',
});

const myAccountRecipes = (store) => (next) => (action) => {
  const state = store.getState();
  const { userid } = state.myAccountRecipes;
  // const { token } = state.user.settingsLogIn;
  console.log(userid);

  switch (action.type) {
    case FETCH_FAVORITES_MIAMS: {
      axiosInstance.get(
        `recipes/user/${idUser}`,
      )
        .then(
          (response) => {
            //console.log(response);
            store.dispatch(saveRecipesMyAccount(response.data));
            //store.dispatch(saveUserID(response.data));
            //console.log(response.data);
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      return next(action);
    }
    /* case FETCH_FAVORITES_MIAMS: {
      axiosInstance.get(
        `users/${idUser}/miams`,
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveFavoritesMiams(response.data));
          console.log(response.data);
          return next(action);
        })
        .catch((err) => {
          console.log(err);
          return next(action);
        });

      return next(action);
    } */
    default:
      return next(action);
  }
};

export default myAccountRecipes;
