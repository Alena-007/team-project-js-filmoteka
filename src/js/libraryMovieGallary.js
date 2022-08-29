// import { movieGallery } from '../index';

export const movieGallery = document.querySelector('.gallery');

export function libraryMovieGallery({
  poster_path,
  original_title,
  genres,
  release_date,
  vote_average,
  id,
}) {
  return `<div class="gallery__card">
        <a class="gallery__item link" href="" onclick="event.preventDefault()">
          <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" loading="lazy" data-id=${id} onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-UsZrhxFJebEgrmhqJIn7H4MhU6LAeqY9T0JLAVYpdcGcy4MfZBDM664hJS0GLmuC8A&usqp=CAU';"/>
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
            </div>
          </div>
        </a>
      </div>`;
}
