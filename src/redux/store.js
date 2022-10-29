import { configureStore } from '@reduxjs/toolkit';
import { filterSlice, contactSlice } from './slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);

export default store;
