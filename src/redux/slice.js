import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: store => {
      store.isLoading = true;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.isLoading = true;
      store.error = payload;
    },
    [addContact.pending]: store => {
      store.isLoading = true;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, { payload }) => {
      store.isLoading = true;
      store.error = payload;
    },
    [deleteContact.pending]: store => {
      store.isLoading = true;
    },
    [deleteContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter(item => item.id !== payload.id);
    },
    [deleteContact.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export default contactSlice.reducer;

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     addContact(state, action) {
//       state.push(action.payload);
//     },
//     removeContact(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });
// export const { addContact, removeContact } = contactSlice.actions;

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
