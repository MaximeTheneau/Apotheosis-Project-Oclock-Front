import { combineReducers } from 'redux';
import recipes from './search';
import header from './header';
import contact from './contact';
import createdRecipe from './createdRecipe';


const rootReducer = combineReducers({
  recipes: recipes,
  header: header,
  contact: contact,
  createdRecipe: createdRecipe,
});

export default rootReducer;
