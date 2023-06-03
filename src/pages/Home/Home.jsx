
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MainTitle, MovieList, LinkMovie } from './Home.styled';
import {getMovies} from 'fetchApi/getMovies';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
  
    getMovies().then(data => {
      setTrendMovies(data.results);

 
    });
  }, []);

  return (
    <main>
      <MainTitle>TRENDING TODAY</MainTitle>
      <MovieList>
        {trendMovies.map(result => (
          <li key={result.id}>
            <LinkMovie to={`/movies/${result.id}`} state={{ from: location }}>
              {result.original_title || result.name}
            </LinkMovie>
          </li>
        ))}
      </MovieList>
    </main>
  );
};

export default Home;
