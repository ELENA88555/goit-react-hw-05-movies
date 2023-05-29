import { getRevievsOfMovie } from "components/FetchApi/getMovies";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ListReviews } from "./Reviews.styled";
import { Title } from "pages/MovieDetails/MovieDetails.styled";


const Reviews = ()=> {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

useEffect(()=> {

  getRevievsOfMovie(movieId).then(data => setReviews(data.results));

}, [movieId])

return (
  <main>
    <ListReviews>
      {reviews.map(review => (
        <li key={review.id}>
          {review ? (<h3>{review.author}</h3> &&  <p>{review.content}</p>
         ) : (<Title>We don't have any reviews for this movie</Title>)}

        </li>
      ))}
    </ListReviews>
  </main>
);


}



export default Reviews