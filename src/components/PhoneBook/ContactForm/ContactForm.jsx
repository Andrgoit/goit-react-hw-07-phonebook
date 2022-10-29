import { useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledInput,
  Styledlabel,
  StyledButton,
} from './ContactForm.styled';
import { addContact } from 'redux/slice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handlerSubmitForm = e => {
    const id = nanoid();
    e.preventDefault();

    //проверка на дубликат
    const checkForDublicate = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkForDublicate) {
      resetForm();
      return toast.info(`${name} is already in contacts`);
    }
    dispatch(addContact({ id, name, number }));
    resetForm();
  };

  const handlerChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
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
        <Styledlabel htmlFor="number">Number</Styledlabel>
        <StyledInput
          type="tel"
          onChange={handlerChange}
          value={number}
          id="number"
          name="number"
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
