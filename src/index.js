import { getPopularMovies } from './js/getFetch';
import { getSearchMovies } from './js/getFetch';
import { getMovieById } from './js/getFetch';
import { showPopularMovieGallery } from './js/showPopularMovieGallery';
import { onSearchMovie } from './js/onSearchMovie';
import { getPagination } from './js/pagination';

// import {showRenderGallery} from './js/renderMovieGallery'
// import { onOpenModal } from './js/modal';
// import { onCloseModal } from './js/modal';
import modal from './js/modal';
import axios from 'axios';
import team from './js/team';
import { openModalBtn } from './js/team';
import { closeModalBtn } from './js/team';
import { addToLib } from './js/addToLib';
import { teamModal } from './js/team';
import { btnFilterLib } from './js/btn_filterLIbrary';
const currentPage = document.querySelector('.current');

if (currentPage.classList.contains('home')) {
  showPopularMovieGallery(1);
} else {
  console.log('hello');
  addToLib();
  btnFilterLib();
}

getPagination();

// showRenderGallery(1)
