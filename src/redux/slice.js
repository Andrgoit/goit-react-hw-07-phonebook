import { createSlice } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const contactsInitialState = {
//   constacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const contactsInitialState = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { value: [...contactsInitialState] },
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload);
    },
    removeContact(state, action) {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const { addContact, removeContact } = contactSlice.actions;

export const filterSlice = createSlice({
  name: 'filter',
  //начальное значение
  initialState: '',
  reducers: {
    setFilter(state, action) {
      // если переменная это примитив (строка, число), нужно ретюрнить значение
      return action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
