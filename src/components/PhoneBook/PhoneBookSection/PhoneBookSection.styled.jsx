import styled from 'styled-components';

export const StyledTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.l}px;
  color: ${p => p.theme.colors.black};
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  display: inline-block;
  border-bottom: 2px solid red;
`;
export const StyledSection = styled.section`
  width: 300px;
  align-items: center;
  padding: 10px 5px;
  border: 1px solid #000;
  border-radius: 4px;
  text-align: center;
`;
