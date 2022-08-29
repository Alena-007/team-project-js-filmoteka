import { getPopularMovies } from './js/getFetch';
import { getSearchMovies } from './js/getFetch';
import { getMovieById } from './js/getFetch';
import { showPopularMovieGallery } from './js/showPopularMovieGallery';
import { onSearch } from './js/searchMovies';

import { getPagination } from './js/pagination';
import { movieGallery } from './js/renderMovieGallery';
// import {showRenderGallery} from './js/renderMovieGallery'
// import { onOpenModal } from './js/modal';
// import { onCloseModal } from './js/modal';
import modal from './js/modal';

import axios from 'axios';

import team from './js/team';
import { openModalBtn } from './js/team';
import { closeModalBtn } from './js/team';

const popularBtn = document.querySelector('#popular');
// const searchBtn = document.querySelector('#search-btn');
const movieByIdBtn = document.querySelector('#by-id');
const searchInput = document.querySelector('.search__input');
searchInput.addEventListener('click', onSearch);

popularBtn.addEventListener('click', onPopular);
// searchBtn.addEventListener('click', onSearch);
movieByIdBtn.addEventListener('click', onMovieById);

showPopularMovieGallery(1);

getPagination();

// showRenderGallery(1)

async function onPopular() {
  const data = await getPopularMovies(1);
  console.log(data);
}

async function onSearch() {
  const data = await getSearchMovies(searchInput.value, 1);
  console.log(data);
}

async function onMovieById() {
  const data = await getMovieById(555);
  console.log(data);
}
getSearchMovies();
import axios from 'axios';
let searchMovies = [];
searchInput.addEventListener('click', onSearch());
