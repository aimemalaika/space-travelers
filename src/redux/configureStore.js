import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRockets from './rockets/rockets';
import missionReducer from './missions/mission';

const reducer = combineReducers({
  reducerRockets,
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
