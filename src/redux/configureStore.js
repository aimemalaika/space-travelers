import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducerRockets, { getData } from './rockets/rockets';
import missionReducer, { getMission } from './missions/mission';

const reducer = combineReducers({
  reducerRockets,
  missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
store.dispatch(getData());
store.dispatch(getMission());

export default store;
