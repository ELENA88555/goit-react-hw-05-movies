import { useLocation } from 'react-router-dom';

import {LinkNav, Li,  Wrapper } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <Wrapper>
      {movies.map(movie => (
        <Li key={movie.id}>
          <LinkNav to={`/movies/${movie.id}`} state={{ from: location }}>
            <p>{movie.original_title || movie.name}</p>
          </LinkNav>
        </Li>
      ))}
    </Wrapper>
  );
};   

export default MoviesList;


