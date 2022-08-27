const API_KEY = '8f869b0e17fd67e41e1d615a0551fc3f';
const BASE_URL = 'https://api.themoviedb.org/3';

const POPULAR_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;

export function getPopularMovies(page) {
  return fetch(`${POPULAR_URL}?api_key=${API_KEY}&page=${page}`).then(respons =>
    respons.json()
  );
}

export async function getSearchMovies(query, page) {
  return fetch(
    `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
  ).then(respons => respons.json());
}

export function getMovieById(id) {
  return fetch(`${MOVIE_ID_URL}${id}?api_key=${API_KEY}`).then(respons =>
    respons.json()
  );
}