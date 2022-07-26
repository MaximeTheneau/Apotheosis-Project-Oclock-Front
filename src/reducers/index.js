import { combineReducers } from 'redux';
import recipes from './search';
import header from './header';
import createdRecipe from './createdRecipe';

const rootReducer = combineReducers({
  recipes: recipes,
  header: header,
  createdRecipe: createdRecipe,
});

export default rootReducer;
