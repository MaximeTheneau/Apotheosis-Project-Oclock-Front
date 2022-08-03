import axios from 'axios';
import {
  FETCH_RECIPES_MY_ACCOUNT,
  saveRecipesMyAccount,
  FETCH_FAVORITES_MIAMS,
  saveFavoritesMiams,
} from '../action/myAccountRecipes';

const axiosInstance = axios.create({
  baseURL: 'http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/',
});

const myAccountRecipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES_MY_ACCOUNT: {
      const state = store.getState();
      const { userid } = (state) => state.user.settingsLogIn.userid;
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
    case FETCH_FAVORITES_MIAMS: {
      const state = store.getState();
      const { userid } = (state) => state.user.settingsLogIn.userid;
      console.log(axiosInstance);
      axiosInstance.get(
        `users/${userid}/miams`,
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
    }
    default:
      return next(action);
  }
};

export default myAccountRecipes;
