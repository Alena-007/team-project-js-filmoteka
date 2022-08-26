// import { movieGallery } from '../index';
const movieGallery = document.querySelector('.gallery');

export const renderMovieGallery = filmsArray => {
  const result = filmsArray
    .map(
      ({
        poster_path,
        original_title,
        genre_ids,
        release_date,
      }) => `<div class = "gallery__card">
        <a class="gallery__item link" href="">
           <img
           src="https://image.tmdb.org/t/p/w500/${poster_path}"
           alt="" loading="lazy">
           <p class="gallery__item-title">${original_title}</p>
           <p class="gallery__item-text">${genre_ids} | ${release_date}</p>
        </a>
     </div>`
    )
    .join('');

  movieGallery.insertAdjacentHTML('beforeend', result);
};
