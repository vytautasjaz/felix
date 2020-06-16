import { createStore, combineReducers } from 'redux';
import content from '../../content/reducers/content';
import authentication from '../../content/reducers/authentication';

const store = createStore(
  combineReducers({ content, authentication }),
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;