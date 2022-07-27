import { combineReducers } from 'redux';
import recipes from './search';
import header from './header';
import contact from './contact';
import createdRecipe from './createdRecipe';
import user from './user';


const rootReducer = combineReducers({
  recipes: recipes,
  header: header,
  contact: contact,
  createdRecipe: createdRecipe,
  user: user,
});

export default rootReducer;
