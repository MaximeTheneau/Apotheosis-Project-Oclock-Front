import { combineReducers } from 'redux';
import recipes from './search';
import header from './header';
import contact from './contact';

const rootReducer = combineReducers({
  recipes: recipes,
  header: header,
  contact: contact,
});

export default rootReducer;
