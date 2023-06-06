import { Suspense, useEffect, useState } from 'react';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AboutMovie,
  ButtonBack,
  LinkBack,
  MoviePoster,
  Title,
  TitleList,
  Wrap,
} from './MovieDetails.styled';

import { MdArrowBack } from 'react-icons/md';
import { getMoviesById } from 'fetchApi/getMovies';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [detailsOfMovie, setDetailsOfMovie] = useState({});
  //  -------при null не ренд. сторінка-----------
  // const [detailsOfMovie, setDetailsOfMovie] = useState(null);
  const [error, setError] = useState(null);


  const location = useLocation();
  const { movieId } = useParams();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMoviesById(movieId).then(data => {
      setDetailsOfMovie(data);
    });
  }, [movieId]);

  const { poster_path, overview, original_title, vote_average, genres } =
    detailsOfMovie;

    if (!MovieDetails) {
      return setError(true)
    }

  return (
   
      <main>
        <ButtonBack type="button">
          <LinkBack to={backLinkHref}>
            <MdArrowBack size={15} />
            Go back
          </LinkBack>
        </ButtonBack>
      
{MovieDetails &&      
  <><Wrap>
          <MoviePoster>
            <img
              src={poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `https://gdr.one/simg/400`}
              alt={original_title} />
          </MoviePoster>

          <AboutMovie>
            <Title>{original_title}</Title>
            <TitleList>User score: {Math.round(vote_average * 10)}%</TitleList>
            <TitleList>Overview</TitleList>
            <p>{overview} </p>
            <TitleList>Genres</TitleList>

            <ul>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </AboutMovie>
        </Wrap><Title>Additional information</Title><Wrap>
            <ul>
              <li>
                <Link to="cast" state={{ ...location.state }}>Cast</Link>
              </li>
              <li>
                <Link to="reviews" state={{ ...location.state }}> Reviews</Link>
              </li>
            </ul>
          </Wrap></>}


        {error && <p>'The resource you requested could not be found.'</p>}
        <Suspense fallback={<Loader />}>
        <Outlet />
        </Suspense>
      </main>
   
  );
};
export default MovieDetails;
