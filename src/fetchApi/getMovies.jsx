import axios from 'axios';


const KEY = 'd0ed730dfaa1e58fe102189b205a7e8c';

export const getMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/all/day';
  const response = await axios.get(`${url}?api_key=${KEY}`);

  return response.data;

};


export const getMoviesById = async (id)=> {
  const url = 'https://api.themoviedb.org/3/movie/'
  const response = await axios.get(`${url}${id}?api_key=${KEY}`);
  return response.data;


}


export const getCastOfMovie = async (id)=> {
  const url = 'https://api.themoviedb.org/3/movie/'
  const response = await axios.get(`${url}${id}/credits?api_key=${KEY}&language=en-US`);
  return response.data;


}
// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'


export const getRevievsOfMovie = async (id)=> {
  const url = 'https://api.themoviedb.org/3/movie/'
  const response = await axios.get(`${url}${id}/reviews?api_key=${KEY}&language=en-US&page=1`);
  return response.data;


}

// 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'


export const getSesrchMovie = async (query)=> {
  const url = 'https://api.themoviedb.org/3/search/movie?'
  const response = await axios.get(`${url}api_key=${KEY}&query=${query}&include_adult=false&language=en-US&page=1`);

  return response.data;


}
