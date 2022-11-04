import { Box } from 'components/Box';
import { BsGithub } from 'react-icons/bs';
import { StyledText, StyledLink } from './Footer.styled';

export default function Footer() {
  return (
    <Box
      py={3}
      as="footer"
      minHeight="50px"
      display="flex"
      borderTop="1px solid #000000"
      boxShadow="2px 0px 8px #888888"
      bg="bgFooter"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <StyledText>Create by</StyledText>
        <StyledLink href="https://github.com/Andrgoit">
          <BsGithub size="24px" />
        </StyledLink>
      </Box>
    </Box>
  );
}
