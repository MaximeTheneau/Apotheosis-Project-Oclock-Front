import { combineReducers } from 'redux';
import recipes from './search';
import header from './header';

const rootReducer = combineReducers({
  recipes: recipes,
  header: header,
});

export default rootReducer;
