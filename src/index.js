import { getPopularMovies } from './js/getFetch';
import { getSearchMovies } from './js/getFetch';
import { getMovieById } from './js/getFetch';
import { renderMovieGallery } from './js/renderMovieGallery';

const popularBtn = document.querySelector('#popular');
const searchBtn = document.querySelector('#search-btn');
const movieByIdBtn = document.querySelector('#by-id');
const movieGallery = document.querySelector('gallery');

popularBtn.addEventListener('click', onPopular);
searchBtn.addEventListener('click', onSearch);
movieByIdBtn.addEventListener('click', onMovieById);

async function onPopular() {
  const data = await getPopularMovies(1);
  console.log(data);
}

async function onSearch() {
  const data = await getSearchMovies('christmas', 1);
  console.log(data);
}

async function onMovieById() {
  const data = await getMovieById(555);
  console.log(data);
}
