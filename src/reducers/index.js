import { combineReducers } from 'redux';
import homePage from './search';
import header from './header';
import contact from './contact';
import createdRecipe from './createdRecipe';
import user from './user';
import recipes from './recipes';


const rootReducer = combineReducers({
  homePage: homePage,
  header: header,
  contact: contact,
  recipes: recipes,
  createdRecipe: createdRecipe,
  user: user,

});

export default rootReducer;
