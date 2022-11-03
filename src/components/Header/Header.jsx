import { Box } from 'components/Box';

export default function Header() {
  return (
    <Box
      as="header"
      minHeight="70px"
      display="flex"
      borderBottom="1px solid #000000"
      boxShadow="0px 2px 6px #888888"
      background="#1d528d"
    ></Box>
  );
}
