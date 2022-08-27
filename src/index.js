import { getPopularMovies } from './js/getFetch';
import { getSearchMovies } from './js/getFetch';
import { getMovieById } from './js/getFetch';
import { showPopularMovieGallery } from './js/showPopularMovieGallery';
import { getPagination } from './js/pagination';
// import { onOpenModal } from './js/modal';
// import { onCloseModal } from './js/modal';
import modal from './js/modal'

import axios from 'axios';


const popularBtn = document.querySelector('#popular');
const searchBtn = document.querySelector('#search-btn');
const movieByIdBtn = document.querySelector('#by-id');

popularBtn.addEventListener('click', onPopular);
searchBtn.addEventListener('click', onSearch);
movieByIdBtn.addEventListener('click', onMovieById);

showPopularMovieGallery(1);
getPagination();
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
  return data;
  console.log(data);
}
