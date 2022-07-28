import axios from 'axios';
import { POST_CREACTED } from '../action/createdRecipe';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_CREACTED: {
      const state = store.getState();
      const {
        title,
        caption,
        captionsteps: {
          etape1,
          etape2,
          etape3,
          etape4,
          etape5,
          etape6,
          etape7,
          etape8,
          etape9,
        },
        duration,
        category,
        difficulty,
        recipeIngredients:{
          ingredient,
          unit,
          quantity,
        },

      } = state.createdRecipe;
      console.log(state);
      axios.post('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes', {
        title: title,
        caption: caption,
        steps: {
          etape1: etape1,
          etape2: etape2,
          etape3: etape3,
          etape4: etape4,
          etape5: etape5,
          etape6: etape6,
          etape7: etape7,
          etape8: etape8,
          etape9: etape9,
        },
        duration: duration,
        difficulty: difficulty,
        category: category,
        recipeIngredients: {
          ingredient: ingredient,
          unit: unit,
          quantity: quantity,
        },
      })
        .then((response) => {
          console.log(response);
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

export default userMiddleware;
