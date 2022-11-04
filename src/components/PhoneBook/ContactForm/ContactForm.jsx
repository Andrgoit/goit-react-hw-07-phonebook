import { useState } from 'react';
import { toast } from 'react-toastify';

import {
  StyledForm,
  StyledInput,
  Styledlabel,
  StyledButton,
} from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts-operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handlerSubmitForm = e => {
    e.preventDefault();

    //проверка на дубликат
    const checkForDublicate = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkForDublicate) {
      resetForm();
      return toast.info(`${name} is already in contacts`);
    }
    dispatch(addContact({ name, phone }));
    resetForm();
  };

  const handlerChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      <StyledForm onSubmit={handlerSubmitForm}>
        <Styledlabel htmlFor="name">Name</Styledlabel>
        <StyledInput
          onChange={handlerChange}
          type="text"
          value={name}
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Styledlabel htmlFor="phone">Number</Styledlabel>
        <StyledInput
          type="tel"
          onChange={handlerChange}
          value={phone}
          id="phone"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export default ContactForm;
