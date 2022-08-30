import { getSearchMovies } from './getFetch';
import { renderMovieGallery } from './renderMovieGallery';
import { movieGallery } from './renderMovieGallery';
import { showLoader, hideLoader } from './loader';
import { Notify } from 'notiflix';

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('input');
const tuiPopularEl = document.querySelector('.pagin-popular');
let query = '';
let page = 1;


export function searchMovie() {
  const loadMoreBtn = document.querySelector('.load-more');
loadMoreBtn.addEventListener('click', onLoadMore);
loadMoreBtn.classList.add('is-hidden');
  formEl.addEventListener('submit', onSearchMovie);

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
          if (data.results.length === 0) {
            Notify.failure(
              'Sorry, there are no movies matching your search query. Please try again.',
              {
                timeout: 4000,
                position: 'left-top',
              }
            );
          } else {
            movieGallery.innerHTML = '';
            renderMovieGallery(data.results);
            loadMoreBtn.classList.remove('is-hidden');
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
  page += 1;
  getSearchMovies(query, page)
    .then(data => {
      console.log(data.total_results);
      console.log(data.results.length);
      if (page >= data.total_pages) {
        loadMoreBtn.classList.add('is-hidden');
      } else renderMovieGallery(data.results);
    })
    .catch(error => console.log(error));
}
