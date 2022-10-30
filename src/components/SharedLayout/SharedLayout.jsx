import { Outlet } from 'react-router-dom';
import { Container, Nav, NavigationLink } from './SharedLayout.styled';

const SharedLayot = () => {
  return (
    <Container>
      <header>
        <Nav>
          <NavigationLink to="/" end>
            Home
          </NavigationLink>
          <NavigationLink to="movies">Movies</NavigationLink>
        </Nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </Container>
  );
};

export default SharedLayot;
