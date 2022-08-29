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

import { teamModal } from './js/team';

const currentPage = document.querySelector('.current');

if (currentPage.classList.contains('home')) {
  showPopularMovieGallery(1);
} else {
  console.log('hello');
  // console.log(arrId);
  // // libraryMovieGallery(arrId);
}

getPagination();

// showRenderGallery(1)
