import { getSesrchMovie } from 'fetchApi/getMovies';
import SearchBar from 'components/SearchBar/SearchBar';
import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';



const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';
  const [queryMovies, setqueryMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
   
    getSesrchMovie(query)
      .then(({results}) => {
        
        if (!results.length === 0) {
          setError(true);
          return console.log('There is no movies with this request');
        }

  const moviesArr = results?.map(({id, original_title, poster_path, name }) => {

  return {
    id,
    original_title,
    poster_path,
    name
  };

 
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


      </div>
    </Suspense>
  );
};
export default Movies;
