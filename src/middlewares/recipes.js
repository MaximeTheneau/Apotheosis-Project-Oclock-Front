import axios from 'axios';
import { FETCH_RECIPES } from '../action/recipes';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      const state = store.getState();
      // const { email, password } = state.user.settingsLogIn;
      // équivalent : double destructuration
      // const { user: { email, password } } = store.user.getState();

      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes')
        .then((response) => {
          console.log(response.data);

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

export default userMiddleware;
