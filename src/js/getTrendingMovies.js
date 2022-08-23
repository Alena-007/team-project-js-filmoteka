export { getTrendingMovies };

const API_KEY = '8f869b0e17fd67e41e1d615a0551fc3f';

function getTrendingMovies(page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
  ).then(respons => respons.json());
}
