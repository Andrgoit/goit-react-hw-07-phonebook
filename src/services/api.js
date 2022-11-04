import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6361738567d3b7a0a6c70f14.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async contact => {
  const { data } = await instance.post('/', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};
