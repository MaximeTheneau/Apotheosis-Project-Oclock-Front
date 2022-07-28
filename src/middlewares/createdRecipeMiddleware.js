import axios from 'axios';
import { POST_CREACTED } from '../action/createdRecipe';

const createdRecipeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_CREACTED: {
      const state = store.getState();
      const {
        title,
        caption,
        difficulty,
        category,
        duration,
      } = state.createdRecipe;
      /*const {
        recipeIngredients,
      } = state.createdRecipe; */
      const {
        steps,
      } = state.createdRecipe;
      const {
        picture,
      } = state.createdRecipe;
      const { token } = state.user.settingsLogIn;

      const formData = new FormData();
      formData.append('json', JSON.stringify({
        title: title,
        caption: caption,
        duration: parseInt(duration, 10),
        difficulty: parseInt(difficulty, 10),
        category: parseInt(category, 10),
        // recipeIngredients: recipeIngredients,
        steps: steps,
      }));
      formData.append('picture', document.getElementById('fileUpload').files[0]);
      axios({
        method: 'post',
        url: 'http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        console.log(response.data);
        // const { data: user } = response;
        // j'enregistre mon token sur l'instance d'axios
        // axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
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

export default createdRecipeMiddleware;
/* 
      /const {
        speudo,
        token,
        userid,
        role,
        logs,
      } = state.user.settingsLogIn;
      const { title } = state.createdRecipe;

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
          quantity: quantity,*/