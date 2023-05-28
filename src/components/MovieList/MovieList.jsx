// import MovieCard from 'components/MovieCard';
// import { Wrapper } from './MoviesList.styled';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path}) => {
        return (
          <li
            key={id}
            id={id}
            title={title}
            poster={poster_path}
            // voteAverage={voteAverage}
            // voteCount={voteCount}
          ></li>
        );
      })}
    </ul>
  );
}
 export default MovieList