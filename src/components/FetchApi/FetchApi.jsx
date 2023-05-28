const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
const KEY = 'd0ed730dfaa1e58fe102189b205a7e8c';

 const FetchMovies = () => {

  const response =  fetch(`${BASE_URL}?api_key=${KEY}`)
  response
  .then(response => {
    if (!response.ok) {
      return Promise.reject(new Error('OOPS!'));
    }
    return response.json();
  })
};


export default FetchMovies


// async function getTrending() {
//   const key = 'd783920aea034ba2adae6031a0bf96c0';
//   const url = 'https://api.themoviedb.org/3/trending/all/day';
//   const filter = `?api_key=${key}`;

//   const response = await fetch(`${url}${filter}`);
//   const data = await response.json();

//   return data;
// }

// export default getTrending;