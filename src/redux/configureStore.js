import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRockets from './rockets/rockets';

const reducer = combineReducers({
  reducerRockets,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
