import { getSearchMovies } from './getFetch';
import { movieGallery } from './renderMovieGallery';
import Notiflix from 'notiflix';
const searchInput = document.querySelector('.search__input');
const searchIcon = document.querySelector('.search__icon');
searchInput.addEventListener('click', onSearch);
searchIcon.addEventListener('click', onSearch);
document.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    onSearch();
  }
});
let searchMovies = [];

export async function onSearch() {
  if (searchInput.value !== '') {
    const data = await getSearchMovies(searchInput.value.trim(), 1);
    searchMovies = data.results;
  }
  if (searchInput.value == '') {
    Notiflix.Notify.failure('Please write your search');
  }
  if (searchMovies < 1 && searchInput.value !== '') {
    Notiflix.Notify.failure('Ooops...Not found');
  }

  if (searchMovies.length && searchInput.value !== '') {
    Notiflix.Notify.success('Your search is successful');
    let newArr = [...searchMovies];
    movieGallery.innerHTML = '';
    movieGallery.innerHTML = searchMovies
      .map(
        item => `<div class="gallery__card">
        <a class="gallery__item  link" href="" onclick="event.preventDefault()">
          <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${
            item.poster_path
          }" alt="" loading="lazy" />
          <div class="gallery__item-info">
            <p class="gallery__item-title">
              ${item.original_title}
            </p>
            <p class="gallery__item-text">
              ${item.genre_ids} | ${item.release_date.substr(0, 4)}
            </p>
          </div>
        </a>
      </div>`
      )
      .join('');
  }
}
