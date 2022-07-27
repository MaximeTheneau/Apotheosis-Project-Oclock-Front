import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import recipe from '../middlewares/recipes';
import userMiddleware from '../middlewares/userMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipe, userMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
