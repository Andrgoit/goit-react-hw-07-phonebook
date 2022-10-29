import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

export const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: none;
  padding: 5px;
  background-color: #dad6d6;
  border: 1px solid #000;
  border-radius: 5px;
  align-items: center;
`;

export const StyledIconSpan = styled.span`
  margin-left: 10px;
  background-color: transparent;
  cursor: pointer;
  :hover {
    color: red;
    transform: scale(1.2);
  }
`;
