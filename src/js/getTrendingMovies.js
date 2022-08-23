import axios from 'axios';
export { getTrendingMovies };

const API_KEY = '8f869b0e17fd67e41e1d615a0551fc3f';

async function getTrendingMovies() {
  try {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
