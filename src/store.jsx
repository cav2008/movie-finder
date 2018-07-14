// Redux
import { devToolsEnhancer } from 'redux-devtools-extension';
// createStore makes the store. combineReducers combines all the reducers into one thing.
import { createStore, combineReducers } from 'redux';

// Reducers.
import searchResultReducer from './reducers/search-result';

// Combine all the reducers into one object.
const allReducers = combineReducers({
  searchResult: searchResultReducer,
});

const store = createStore(allReducers, devToolsEnhancer());

export default store;
