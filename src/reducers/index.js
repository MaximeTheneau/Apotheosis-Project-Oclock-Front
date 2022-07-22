import { combineReducers } from 'redux';

import contactReducer from './contact';
import headerReducer from './header';

const rootReducer = combineReducers({
  contact: contactReducer,
  header: headerReducer,
});

export default rootReducer;
