import { getMoviesById } from 'components/FetchApi/getMovies';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { ButtonBack, LinkBack, MoviePoster, Title } from './MovieDetails.styled';
// import Cast from "components/Cast/Cast"
// import Reviews from "components/Reviews/Reviews"
import { MdArrowBack } from 'react-icons/md';

const MovieDetails = () => {
  const [detailsOfMovie, setDetailsOfMovie] = useState({});

  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    getMoviesById(id).then(data => {
      setDetailsOfMovie(data);
    });
  }, [id]);

  const { poster_path, overview, original_title, vote_average } =
    detailsOfMovie;

  return (
    <main>
      <Title>Additional information</Title>
      <ButtonBack type="button">
        <LinkBack>
          <MdArrowBack size={15} />
          Go back
        </LinkBack>
      </ButtonBack>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="revies"> Reviews</Link>
        </li>
      </ul>
      <MoviePoster>
      <img           src={
            poster_path
              // ? `https://image.tmdb.org/t/p/w300${poster_path}`
              // : `http://www.suryalaya.org/images/no_image.jpg`
          } alt={original_title} />

      </MoviePoster>
      <Title>{original_title}</Title>
      <h3>User score: {vote_average}%</h3>
      <h3>Overview</h3>
      <p>{overview} </p>
      <h3>Genres</h3>
      
      <Outlet />
      {/* <Cast></Cast>
      <Reviews></Reviews> */}
    </main>
  );
};
export default MovieDetails;
