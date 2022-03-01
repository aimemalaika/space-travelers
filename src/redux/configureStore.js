import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducerRockets from './rockets/rockets';

const reducer = combineReducers({
  reducerRockets,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
