import axios from 'axios';
import { FETCH_RECIPES_MY_ACCOUNT, saveRecipesMyAccount } from '../action/myAccountRecipes';

const myAccountRecipes = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES_MY_ACCOUNT: {
      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes/user/8')
        .then(
          (response) => {
            console.log(response);
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
    default:
      return next(action);
  }
};

export default myAccountRecipes;
