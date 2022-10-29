import React from 'react';
import { StyledSection, StyledTitle } from './PhoneBookSection.styled';

export default function PhoneBookSection({ title, children }) {
  return (
    <>
      <StyledSection>
        <StyledTitle>{title}</StyledTitle>
        {children}
      </StyledSection>
    </>
  );
}
