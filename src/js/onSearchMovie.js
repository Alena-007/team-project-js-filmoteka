import { getSearchMovies } from './getFetch';
import { renderMovieGallery } from './renderMovieGallery';
import { movieGallery } from './renderMovieGallery';
import { showLoader, hideLoader } from './loader';
import { Notify } from 'notiflix';

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('input');
const tuiPopularEl = document.querySelector('.pagin-popular');
let loadMoreBtn = null;

let query = '';
let page = 1;
let perPage = 20;

export function searchMovie() {
  formEl.addEventListener('submit', onSearchMovie);
  loadMoreBtn = document.querySelector('.load-more');
  loadMoreBtn.addEventListener('click', onLoadMore);
  loadMoreBtn = document.querySelector('.load-more');
  function onSearchMovie(e) {
    e.preventDefault();
    showLoader();
    movieGallery.innerHTML = '';
    page = 1;
    query = inputEl.value.trim();
    tuiPopularEl.classList.add('visually-hidden');

    if (query !== '') {
      getSearchMovies(query, page)
        .then(data => {
          hideLoader();
          loadMoreBtn.style.display = 'none';
          if (data?.results.length === 0) {
            Notify.failure(
              'Sorry, there are no movies matching your search query. Please try again.',
              {
                timeout: 4000,
                position: 'left-top',
              }
            );
          } else if (data?.results.length < perPage) {
            movieGallery.innerHTML = '';
            renderMovieGallery(data.results);
            loadMoreBtn.style.display = 'none';
            Notify.success(
              `Hooray! We found ${data.total_results} movies for you! Enjoy watching the movie.`,
              {
                timeout: 4000,
                position: 'left-top',
              }
            );
          } else {
            movieGallery.innerHTML = '';
            renderMovieGallery(data.results);
            loadMoreBtn.style.display = 'grid';
            inputEl.value = '';
            Notify.success(
              `Hooray! We found ${data.total_results} movies for you! Enjoy watching the movie.`,
              {
                timeout: 4000,
                position: 'left-top',
              }
            );
          }
        })
        .catch(error => console.log(error));
    } else {
      hideLoader();
      Notify.info(
        'Enter your request in the field and watch interesting movies!',
        {
          timeout: 4000,
          position: 'left-top',
        }
      );
    }
  }
}

export function onLoadMore() {
   loadMoreBtn = document.querySelector('.load-more');
  page += 1;
  getSearchMovies(query, page)
    .then(data => {
      if (data.results.length < perPage) {
        renderMovieGallery(data.results);
        loadMoreBtn.style.display = 'none';
        Notify.info(
          "We're sorry, but you've reached the end of search results.",
          {
            timeout: 4000,
            position: 'left-top',
          }
        );
      } else renderMovieGallery(data.results);
    })
    .catch(error => console.log(error));
}


