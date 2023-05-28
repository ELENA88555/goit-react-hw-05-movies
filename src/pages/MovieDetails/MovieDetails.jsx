import { Link, Outlet, useParams } from "react-router-dom";
// import Cast from "components/Cast/Cast"
// import Reviews from "components/Reviews/Reviews"


const MovieDetails = ( )=> {

  // const {movieId} = useParams()


  return (
    <div>
      <h2>
        Additional information
      </h2>
      <ul>
        <li>
        <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="revies"> Reviews</Link>
        </li>
      </ul>
      <Outlet />
      {/* <Cast></Cast>
      <Reviews></Reviews> */}
    </div>
  )

}
 export default MovieDetails