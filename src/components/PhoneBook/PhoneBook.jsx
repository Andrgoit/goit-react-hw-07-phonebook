// import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhoneBookSection from './PhoneBookSection/PhoneBookSection';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

import { StyledMain, StyledContainer } from './PhoneBook.styled';

const PhoneBook = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <StyledMain>
        <StyledContainer>
          <PhoneBookSection title="Phonebook">
            <ContactForm />
          </PhoneBookSection>
          <>
            <PhoneBookSection title="Search...">
              <Filter />
            </PhoneBookSection>
            <PhoneBookSection title="Contacts">
              <Contacts />
            </PhoneBookSection>
          </>
        </StyledContainer>
      </StyledMain>
    </>
  );
};

export default PhoneBook;
