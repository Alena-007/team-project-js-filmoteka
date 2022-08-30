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
  let listGenreNames = genres.map(genreName => genreName.name).slice(0, 2);
  if (genres.length > 2 || genres.length === 0) {
    listGenreNames.push('Others');
  }

  return `<div class="gallery__card">
        <a class="gallery__item link" href="" onclick="event.preventDefault()">
          <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" loading="lazy" data-id=${id} onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-UsZrhxFJebEgrmhqJIn7H4MhU6LAeqY9T0JLAVYpdcGcy4MfZBDM664hJS0GLmuC8A&usqp=CAU';"/>
          
          <div class="gallery__item-info">
            <div class="gallery__item-title" data-id=${id}>
              ${original_title}
            </div>
            <div class="gallery__item-data"> 
            <p class="gallery__item-text" data-id=${id}>
              ${listGenreNames.slice(0, 3).join(', ')} | ${
    release_date ? release_date.substr(0, 4) : 'not our era'
  }</p>
            <p class="gallery__item-rating">${vote_average.toFixed(1)}</p>
          </div>
          </div>
        </a>
      </div>`;
}
