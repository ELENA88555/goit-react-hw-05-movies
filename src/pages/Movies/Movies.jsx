import { getSesrchMovie } from 'components/FetchApi/getMovies';
import SearchBar from 'components/SearchBar/SearchBar';
import { Suspense, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const [queryMovies, setqueryMovies] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    getSesrchMovie(query).then(data => setqueryMovies(data.results));
  }, [query]);

  const handleSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;

    setSearchParams({ query: form.elements.query.value });
    console.log(query);
    form.reset();
  };

  return (
    <Suspense>
      <div>
        <SearchBar onSubmit={handleSubmitForm}></SearchBar>
        <MoviesList>
          {queryMovies.map(queryMovie => (
            <li key={queryMovie.id}>
              <Link to={`/movies/${queryMovie.id}`} state={{ from: location }}>
                <p>{queryMovie.original_title || queryMovie.name}</p>
              </Link>
            </li>
          ))}
        </MoviesList>
      </div>
    </Suspense>
  );
};
export default Movies;
