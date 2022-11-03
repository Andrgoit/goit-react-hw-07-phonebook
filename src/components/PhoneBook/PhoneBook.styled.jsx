import styled from 'styled-components';

export const StyledMain = styled.main`
  /* background: url('https://cdn.pixabay.com/photo/2012/03/03/23/06/wall-21534_960_720.jpg'); */
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
