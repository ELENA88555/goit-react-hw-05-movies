import { getRevievsOfMovie } from 'components/FetchApi/getMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListReviews } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getRevievsOfMovie(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      <ListReviews>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ListReviews>
    </div>
  );
};

export default Reviews;
