import { configureStore } from '@reduxjs/toolkit';
import statReducer from './stateSlice';

// this only works for one level of reducers
export const store = configureStore({
  reducer: {
    updater: statReducer
  }
});
