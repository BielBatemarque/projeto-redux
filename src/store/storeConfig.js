import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
  numeros: function (state, action) {
    // console.log(state, ' ', action);
    return {
      min: 7,
      max: 31,
    };
  },
  nomes: function (state, action) {
    // console.log(state, ' ', action);
    return [
      'Ana',
      'Bia',
      'Carlos'
    ];
  }
});

const store = configureStore({ reducer: reducers });

export default store;