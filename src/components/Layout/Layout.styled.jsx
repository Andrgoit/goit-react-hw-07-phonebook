import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  height: 100vh;
  background-color: ${p => p.theme.colors.bgMain};
  box-sizing: border-box;
`;
