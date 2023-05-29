import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  AboutMovie,
  ButtonBack,
  LinkBack,
  MovieInfo,
  MoviePoster,
  Title,
  TitleList,
  Wrap,
} from './MovieDetails.styled';
// import Cast from "components/Cast/Cast"
// import Reviews from "components/Reviews/Reviews"
import { MdArrowBack } from 'react-icons/md';
import { getMoviesById } from 'components/FetchApi/getMovies';
import NotFound from 'pages/NotFound';

const MovieDetails = () => {
  const [detailsOfMovie, setDetailsOfMovie] = useState({});

  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesById(movieId).then(data => {
      setDetailsOfMovie(data);
      console.log(setDetailsOfMovie(data));
    });
  }, [movieId]);

  const { poster_path, overview, original_title, vote_average } =
    detailsOfMovie;
  // genres,
  return (
    <main>
      <ButtonBack type="button">
        <LinkBack>
          <MdArrowBack size={15} />
          Go back
        </LinkBack>
      </ButtonBack>

      <Wrap>
        <MoviePoster>
          <img
            src={
              poster_path ? (
                `https://image.tmdb.org/t/p/w300${poster_path}`
              ) : (
                <NotFound />
              )
            }
            alt={original_title}
          />
        </MoviePoster>

        <AboutMovie>
          <Title>{original_title}</Title>
          <TitleList>User score: {vote_average * 10}%</TitleList>
          <TitleList>Overview</TitleList>
          <p>{overview} </p>
          <TitleList>Genres</TitleList>
          {/*           
<div>
  {genres.map(genre=> (<p id= {genre.id}>{genre.name}</p>))}

</div> */}
        </AboutMovie>
      </Wrap>
      <Title>Additional information</Title>
      <Wrap>
      
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews"> Reviews</Link>
        </li>
      </ul>
      </Wrap>


      <Outlet />
      {/* <Cast></Cast>
      <Reviews></Reviews> */}
    </main>
  );
};
export default MovieDetails;
