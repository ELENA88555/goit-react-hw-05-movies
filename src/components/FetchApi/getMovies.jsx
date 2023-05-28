import axios from 'axios';


const KEY = 'd0ed730dfaa1e58fe102189b205a7e8c';

export const getMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/all/day';
  const response = await axios.get(`${url}?api_key=${KEY}`);
  return response.data;

  // const response =  fetch(`${BASE_URL}?api_key=${KEY}`)
  // response
  // .then(response => {
  //   if (!response.ok) {
  //     return Promise.reject(new Error('OOPS!'));
  //   }
  //   const data =  response.json()
  //   return data
  // })
};





export const getMoviesById = async (id)=> {
  const url = 'https://api.themoviedb.org/3/movie/'
  const response = await axios.get(`${url}${id}?api_key=${KEY}&language=en-US`);
  return response.data;


}


