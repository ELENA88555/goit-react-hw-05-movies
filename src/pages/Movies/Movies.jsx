import { getSesrchMovie } from 'fetchApi/getMovies';
import SearchBar from 'components/SearchBar/SearchBar';
import { Suspense, useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from './Movies.styled';

const Movies = () => {
  const location = useLocation();
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
      .then(data => {
        if (!data.results.length === 0) {
          setError(true);
          return console.log('There is no movies with this request')
        }
        setqueryMovies(data.results);
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
        <SearchBar
          onSubmit={handleSubmitForm}
          // handleChangetForm={handleChangetForm}
          // value={query}
        ></SearchBar>

        {error && <p>There is no movies with this request.</p>}

        <MoviesList>
          {queryMovies?.map(queryMovie => (
            <li key={queryMovie.id}>
              <Link to={`${queryMovie.id}`} state={{ from: location }}>
                <p>{queryMovie.original_title || queryMovie.name}</p>
              </Link>
            </li>
          ))}
        </MoviesList>
      </div>
      {/* <div>
                <SearchBar 
         onSubmit={handleSubmitForm} 
         handleChangetForm= {handleChangetForm}
         value={query}
         >
          
         </SearchBar>
        {
          error ? (<p>"The resource you requested could not be found."</p>)
          : 
          (
            <MoviesList>
            {queryMovies?.map(queryMovie => (
              <li key={queryMovie.id}>
                <Link to={`/movies/${queryMovie.id}`} state={{ from: location }}>
                  <p>{queryMovie.original_title || queryMovie.name}</p>
                </Link>
              </li>
            ))}
          </MoviesList>
          )
        }


      </div> */}
    </Suspense>
  );
};
export default Movies;


