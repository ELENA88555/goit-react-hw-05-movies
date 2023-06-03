import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinkHeader } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
  
    <Container>
      <Header>
        <nav>
          <NavLinkHeader  to="/">Home</NavLinkHeader >
          <NavLinkHeader  to="/movies">Movies</NavLinkHeader >
        </nav>
      </Header>
      <Suspense fallback= {<Loader/>}>
        <Outlet />
      </Suspense>
    </Container>
 
  );
};

export default SharedLayout;
