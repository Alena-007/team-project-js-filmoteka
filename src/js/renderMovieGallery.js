// import { movieGallery } from '../index';

import { getGenres } from './getFetch';

export const movieGallery = document.querySelector('.gallery');

// getGenres().then(data => {
//   const genreName = data.genres.map(genreName => genreName.name);
//   const genreId = data.genres.map(genreName => genreName.id);
//   console.log(genreName);
//   console.log(genreId);
//   console.log(getGenres());
// });

export const renderMovieGallery = filmsArray => {
  const genresList = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };

  const result = filmsArray
    .map(({ poster_path, original_title, genre_ids, release_date, id }) => {
      const idsKeys = Object.keys(genresList);
      const idsValues = Object.values(genresList);
      // const genres = genre_ids.map(i => i);
      // console.log(genres);
      const idKey = idsKeys.map(Number);
      const idVal = idsValues.map(val => val);
      // console.log(idKey);
      // console.log(idVal);
      const genreName = [];
      for (value of idVal) {
        console.log(value);
      }
      for (let genre of genre_ids) {
        console.log(genre);
        for (let key of idKey) {
          console.log(key);
          if (key === genre) {
            genreName.push(idVal[5]);
          }
        }
      }

      return `<div class="gallery__card">
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
      </div>`;
    })
    .join('');

  movieGallery.insertAdjacentHTML('beforeend', result);
};

// const genresList = {
//   0: { id: 28, name: 'Action' },
//   1: { id: 12, name: 'Adventure' },
//   2: { id: 16, name: 'Animation' },
//   3: { id: 35, name: 'Comedy' },
//   4: { id: 80, name: 'Crime' },
//   5: { id: 99, name: 'Documentary' },
//   6: { id: 18, name: 'Drama' },
//   7: { id: 10751, name: 'Family' },
//   8: { id: 14, name: 'Fantasy' },
//   9: { id: 36, name: 'History' },
//   10: { id: 27, name: 'Horror' },
//   11: { id: 10402, name: 'Music' },
//   12: { id: 9648, name: 'Mystery' },
//   13: { id: 10749, name: 'Romance' },
//   14: { id: 878, name: 'Science Fiction' },
//   15: { id: 10770, name: 'TV Movie' },
//   16: { id: 53, name: 'Thriller' },
//   17: { id: 10752, name: 'War' },
//   18: { id: 37, name: 'Western' },
// };
