import { createStore } from 'redux';
import contentReducer from '../../content';

const store = createStore(
  contentReducer,
  process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
