import styled from 'styled-components';

export const StyledText = styled.p`
  color: inherit;
  text-decoration: none;
  padding: 0;
  margin: 0;
`;
export const StyledLink = styled.a`
  margin-left: 10px;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: red;
    text-shadow: 2px 2px 2px red;
  }
`;
