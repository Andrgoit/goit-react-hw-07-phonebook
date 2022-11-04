import styled from 'styled-components';

export const StyledMain = styled.main`
  background: linear-gradient(
    315deg,
    rgb(93, 152, 219) 50%,
    rgb(186, 209, 234) 75%,
    rgb(93, 152, 219)
  );
  /* background-color: ${p => p.theme.colors.bgMain}; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  /* background: url('http://bgfons.com/upload/plastic_texture1361.jpg'); */
  background-color: ${p => p.theme.colors.bgContainer};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.container};
  box-shadow: 0px 4px 8px black;
`;
