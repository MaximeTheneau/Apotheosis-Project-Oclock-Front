import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import myAccountRecipes from '../middlewares/myAccountRecipes';
import recipe from '../middlewares/recipes';
import userMiddleware from '../middlewares/userMiddleware';
import createdRecipeMiddleware from '../middlewares/createdRecipeMiddleware';
import oneRecipe from '../middlewares/oneRecipeMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(

  applyMiddleware(recipe, userMiddleware, createdRecipeMiddleware, myAccountRecipes, oneRecipe),

);

const store = createStore(reducer, enhancers);

export default store;
