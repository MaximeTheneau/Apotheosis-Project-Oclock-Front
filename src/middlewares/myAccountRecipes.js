import axios from 'axios';
import {
  FETCH_RECIPES_MY_ACCOUNT,
  saveRecipesMyAccount,
  FETCH_FAVORITES,
  fetchFavorites,
  saveFavorites,
} from '../action/myAccountRecipes';

const axiosInstance = axios.create({
  baseURL: 'http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/',
});

const myAccountRecipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES_MY_ACCOUNT: {
      const userid = (state) => state.user.settingsLogIn.userid;
      axiosInstance.get(
        `recipes/user/${userid}`,
      )
        .then(
          (response) => {
            // console.log(response);
            store.dispatch(saveRecipesMyAccount(response.data));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );
      return next(action);
    }
    case FETCH_FAVORITES: {
      const userid = (state) => state.user.settingsLogIn.userid;
      console.log(axiosInstance);
      axiosInstance.get(
        `users/${userid}/miams`,
      )
        .then((response) => {
          console.log(response);
          store.dispatch(saveFavorites(response.data));
          console.log(response.data);
          return next(action);
        })
        .catch((err) => {
          console.log(err);
          return next(action);
        });

      return next(action);
    }
    default:
      return next(action);
  }
};

export default myAccountRecipes;
