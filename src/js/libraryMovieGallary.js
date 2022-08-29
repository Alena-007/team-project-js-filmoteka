// import { movieGallery } from '../index';
const movieGallery = document.querySelector('.gallery');

export function libraryMovieGallery({
        poster_path,
        original_title,
        genres,
        release_date,
        vote_average,
        id,
      }) {
  return `<div class="gallery__card">
        <a class="gallery__item link" href="" onclick="event.preventDefault()>
          <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" data-id=${id} />
          <div class="gallery__item-data">
          <div class="gallery__item-info">
            <p class="gallery__item-title">
              ${original_title}
            </p>
            <p class="gallery__item-text">
              ${genres
      .map(genreName => genreName.name)
      .slice(0, 3)
      .join(', ')} | ${release_date.substr(0, 4)}
            </p>
          </div>
          <div class="gallery__item-rating">${vote_average.toFixed(1)}
            </div></div>
        </a>
      </div>`;
};
