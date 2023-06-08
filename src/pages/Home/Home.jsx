import React, { useState, useEffect } from 'react';
import { MainTitle,} from './Home.styled';
import { getMovies } from 'fetchApi/getMovies';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);


  useEffect(() => {
    getMovies().then(({ results }) => {
      const moviesArr =  results.map(({ id, original_title, poster_path, name }) => {
   return {
          id,
          original_title,
          poster_path,
          name,
        };

     
      });

      setTrendMovies(moviesArr);
    });
  }, []);

  return (
    <main>
      <MainTitle>TRENDING TODAY</MainTitle>
      <MoviesList
       movies={trendMovies}>
      </MoviesList>
    </main>
  );
};

export default Home;
