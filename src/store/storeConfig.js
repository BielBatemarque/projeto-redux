import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
  numeros: function (state, action) {
    switch(action.type){
      case 'NUM_MIN_ALTERADO':
        return {
          ...state,
          min:action.payload,
        }
      default:
        return {
          min: 7,
          max: 31,
        };
    }
  },
  
  nomes: function (state, action) {
    console.log('reducer de nomes foi chamado');
    console.log(state, ' ', action);
    return [
      'Ana',
      'Bia',
      'Carlos'
    ];
  }
});

const store = configureStore({ reducer: reducers });

export default store;