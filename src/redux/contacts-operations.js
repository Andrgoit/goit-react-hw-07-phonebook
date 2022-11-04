import * as api from 'services/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await api.fetchContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkApi) => {
    try {
      const data = await api.addContact(contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const data = await api.deleteContact(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

//--------------------------------------------------------
// на память

// import actions from './contacts-actions';

// export const fetchContacts = () => {
//   const func = async dispatch => {
//     dispatch(actions.fetchContactsLoading());
//     try {
//       const data = await api.fetchContacts();
//       dispatch(actions.fetchContactsSuccess(data));
//     } catch (error) {
//       const { message, response } = error;
//       const errorData = {
//         message,
//         status: response.status,
//       };
//       dispatch(actions.fetchContactsError(errorData));
//     }
//   };
//   return func;
// };

// export const addContact = data => {
//   const func = async dispatch => {
//     dispatch(actions.addContactLoading(data));
//     try {
//       const result = await api.addContact();
//       dispatch(actions.addContactSuccess(result));
//     } catch (error) {
//       const { message, response } = error;
//       const errorData = {
//         message,
//         status: response.status,
//       };
//       dispatch(actions.addContactError(errorData));
//     }
//   };
//   return func;
// };

// export const deleteContact = id => {
//   const func = async dispatch => {
//     dispatch(actions.deleteContactLoading());
//     try {
//       const result = await api.deleteContact(id);
//       dispatch(actions.deleteContactSuccess(result));
//     } catch (error) {
//       const { message, response } = error;
//       const errorData = {
//         message,
//         status: response.status,
//       };
//       dispatch(actions.deleteContactError(errorData));
//     }
//   };
//   return func;
// };
