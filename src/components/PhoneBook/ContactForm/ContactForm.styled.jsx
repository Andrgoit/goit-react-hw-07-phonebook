import styled from 'styled-components';

export const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 0 auto;
`;

export const StyledInput = styled.input`
  width: 200px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  color: #000;
  outline: none;
`;
export const Styledlabel = styled.label`
  margin-right: 10px;
`;

export const StyledButton = styled.button`
  display: block;
  padding: 4px;
  font-size: 16px;

  border: none;
  border-radius: 4px;
  box-shadow: 0px 2px 2px black;
  top: 0;
  cursor: pointer;

  :active {
    box-shadow: none;
  }
`;
