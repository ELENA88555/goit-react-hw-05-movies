import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Suspense fallback= {<Loader/>}>
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
    </Suspense>
  );
};

export default SharedLayout;
