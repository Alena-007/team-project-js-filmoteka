import { getSearchMovies } from './getFetch';
import { renderMovieGallery } from './renderMovieGallery';
import { movieGallery } from './renderMovieGallery';
import { Notify } from 'notiflix';

let query = '';
let page = 1;

const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('input');
const galleryEl = document.querySelector('.movie-list');

formEl.addEventListener('submit', onSearchMovie);

export function onSearchMovie(e) {
  e.preventDefault();
  galleryEl.innerHTML = '';
  page = 1;
  query = inputEl.value.trim();

  if (query !== '') {
    getSearchMovies(query, page)
      .then(data => {
        console.log(data.results);
        if (data.results.length === 0) {
          Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.',
            {
              timeout: 6000,
            }
          );
        } else {
          galleryEl.innerHTML = '';
          movieGallery.innerHTML = '';
          renderMovieGallery(data.results);
          console.log(data);
          Notify.success(
            `Hooray! We found ${data.total_results} movies for you! Enjoy watching the movie.`,
            {
              timeout: 6000,
            }
          );
        }
      })
      .catch(error => console.log(error));
  } else {
    Notify.info(
      'Enter your request in the field and watch interesting movies!',
      {
        timeout: 6000,
      }
    );
  }
}
