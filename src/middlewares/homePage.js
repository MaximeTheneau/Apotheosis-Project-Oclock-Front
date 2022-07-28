import axios from 'axios';

// Lorsqu'on met en place un middleware, il ne faut pas oublier de le brancher au store !
const homePage = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      axios.get('http://adrienpinilla-server.eddi.cloud/omiam/current/public/api/recipes')
        .then(
          (response) => {
            store.dispatch(saveRecipes(response.data));
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

export default homePage;