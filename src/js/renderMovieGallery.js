// import { movieGallery } from '../index';
import { getGenres } from './getFetch';
export const movieGallery = document.querySelector('.gallery');

export const renderMovieGallery = filmsArray => {
  getGenres().then(data => {
    const genreName = data.genres.map(genreName => genreName.name);
    const genreId = data.genres.map(genreName => genreName.id);
    console.log(genreName);
    console.log(genreId);
    // return genreList;
  });

  const result = filmsArray
    .map(
      ({
        poster_path,
        original_title,
        genreName,
        release_date,
        id,
      }) => `<div class="gallery__card">
        <a class="gallery__item  link" href="" onclick="event.preventDefault()">
          <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" loading="lazy" data-id=${id} />
          <div class="gallery__item-info">
            <p class="gallery__item-title">
              ${original_title}
            </p>
            <p class="gallery__item-text">
              ${genreName} | ${release_date.substr(0, 4)}
            </p>
          </div>
        </a>
      </div>`
    )
    .join('');

  movieGallery.insertAdjacentHTML('beforeend', result);
};
