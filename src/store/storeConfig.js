import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import numereosReducer from './reducers/numeros';

const reducers = combineReducers({
  numeros: numereosReducer,
});

const store = configureStore({ reducer: reducers });

export default store;