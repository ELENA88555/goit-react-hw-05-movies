import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import { MainTitle,} from './Home.styled';
import { getMovies } from 'fetchApi/getMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    getMovies().then(({ results }) => {
      const moviesArr = [];
      results.map(({ id, original_title, poster_path, name }) => {
        const movie = {
          id,
          original_title,
          poster_path,
          name,
        };

        return moviesArr.push(movie);
      });

      setTrendMovies(moviesArr);
    });
  }, []);

  return (
    <main>
      <MainTitle>TRENDING TODAY</MainTitle>
      <MoviesList
       movies={trendMovies}>
        {/* {trendMovies.map(result => (
          <li key={result.id}>
            <LinkMovie to={`/movies/${result.id}`} state={{ from: location }}>
              {result.original_title || result.name}
            </LinkMovie>
          </li>
        ))} */}
      </MoviesList>
    </main>
  );
};

export default Home;
