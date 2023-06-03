import { getCastOfMovie } from 'fetchApi/getMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListCasts } from './Cast.styled';


const Cast = () => {
  const [castLists, setCastLists] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastOfMovie(movieId).then(data => setCastLists(data.cast));
  }, [movieId]);

  return (
    
    <main>
      <ListCasts>
        {castLists.map(castList => (
          <li key={castList.id}>
            <img
              width={50}
              src=
              // {
              //   castList.profile_path &&
              //   (`https://image.tmdb.org/t/p/w200${castList.profile_path}`)
               
              // }
              {
                castList.profile_path ? 
                (`https://image.tmdb.org/t/p/w200${castList.profile_path}`)
                : (`https://gdr.one/simg/125x145`)
              }
              alt={castList.name}
            />
            <p>{castList.character}</p>
          </li>
        ))}
      </ListCasts>
    </main>
  );
};

export default Cast;
