import { Box } from 'components/Box';

export default function Footer() {
  return (
    <Box
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
      Creat by AndrGoIt
    </Box>
  );
}
