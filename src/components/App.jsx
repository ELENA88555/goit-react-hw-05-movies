import Home from 'pages/Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { lazy } from 'react';
const Cast = lazy(()=> import('./Cast/Cast'))
const Reviews = lazy(()=> import('./Reviews/Reviews'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
