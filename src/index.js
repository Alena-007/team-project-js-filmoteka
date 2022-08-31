import { getPopularMovies } from './js/getFetch';
import { getSearchMovies } from './js/getFetch';
import { getMovieById } from './js/getFetch';

import { movieGallery } from './js/renderMovieGallery';
import upButton from './js/upbutton';
import { searchMovie } from './js/onSearchMovie';
import { getPagination} from './js/pagination';
// import {showRenderGallery} from './js/renderMovieGallery'
// import { onOpenModal } from './js/modal';
// import { onCloseModal } from './js/modal';
import {
  modalId,
  gallery,
  galleryLibQueue,
  galleryLibWatched,
} from './js/modal';
import axios from 'axios';
import team from './js/team';
import { openModalBtn } from './js/team';
import { closeModalBtn } from './js/team';
import { addToLib } from './js/addToLib';
import { teamModal } from './js/team';
import { btnFilterLib } from './js/btn_filterLIbrary';
import changetheme from './js/changetheme'
import { onLoadMore } from './js/onSearchMovie';
import { showPopularMovieGallery } from './js/showPopularMovieGallery';
const currentPage = document.querySelector('.current');

if (currentPage.classList.contains('home')) {
  showPopularMovieGallery(1);
  getPagination();
  modalId(gallery);
  searchMovie();
} else {
  modalId(galleryLibWatched);
  modalId(galleryLibQueue);
  addToLib();
  btnFilterLib();
}

// showRenderGallery(1)
