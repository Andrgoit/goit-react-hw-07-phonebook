import { configureStore } from '@reduxjs/toolkit';
import { filterSlice, contactSlice } from './slice';

const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;
