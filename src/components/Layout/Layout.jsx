import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { StyledContainer } from './Layout.styled';

export default function Layout({ children }) {
  return (
    <StyledContainer>
      <Header />
      {children}
      <Footer />
    </StyledContainer>
  );
}
