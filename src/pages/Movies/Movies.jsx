import { getSesrchMovie } from 'fetchApi/getMovies';
import SearchBar from 'components/SearchBar/SearchBar';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

// import { MoviesList } from './Movies.styled';

const Movies = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const [queryMovies, setqueryMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
   
    getSesrchMovie(query)
      // .then(response => {
      //   if (response.data.success.false) {
      //     setError(true);
      //     return alert('The resource you requested could not be found.');
      //   }
      //   setqueryMovies(response.results);
      // }
      // );
      .then(({results}) => {
        const moviesArr = []
        if (!results.length === 0) {
          setError(true);
          return console.log('There is no movies with this request');
        }

results?.map(({id, original_title, poster_path, name }) => {

  const movie = {
    id,
    original_title,
    poster_path,
    name
  };

  return moviesArr.push(movie);
})

        setqueryMovies(moviesArr);
        setError(false);
      });
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

        {error && <p>There is no movies with this request.</p>}
        <MoviesList
         movies = {queryMovies}>
        </MoviesList>

        {/* <MoviesList>
          {queryMovies?.map(queryMovie => (
            <li key={queryMovie.id}>
              <Link to={`${queryMovie.id}`} state={{ from: location }}>
                <p>{queryMovie.original_title || queryMovie.name}</p>
              </Link>
            </li>
          ))}
        </MoviesList> */}
      </div>
    </Suspense>
  );
};
export default Movies;
