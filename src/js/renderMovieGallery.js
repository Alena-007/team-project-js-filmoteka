// import { movieGallery } from '../index';

// import { getGenres } from './getFetch';

export const movieGallery = document.querySelector('.gallery');

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
      const idKey = Object.keys(genresList).map(Number);
      const idVal = Object.entries(genresList).map(val => val);

      const genreName = [];
      for (let genre of genre_ids) {
        for (let key of idKey) {
          if (key === genre) {
            let num = idKey.indexOf(key);
            genreName.push(idVal[num][1]);
          }
        }
      }
      let listGenreNames = genreName.slice(0, 2);
      if (genreName.length >= 2 || genreName.length === 0) {
        listGenreNames.push('Others');
      }
      // const genreInfo = listGenreNames.join(', ');

      return `<div class="gallery__card">
        <a class="gallery__item  link" href="" onclick="event.preventDefault()">
          <img class="gallery__image" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${original_title}" loading="lazy" data-id=${id} onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-UsZrhxFJebEgrmhqJIn7H4MhU6LAeqY9T0JLAVYpdcGcy4MfZBDM664hJS0GLmuC8A&usqp=CAU';"/>
          <div class="gallery__item-info">
            <p class="gallery__item-title" data-id=${id}>
              ${original_title}
            </p>
            <p class="gallery__item-text" data-id=${id}>
              ${listGenreNames
                .slice(0, 3)
                .map(a => a)
                .join(', ')} | ${release_date.substr(0, 4)}
            </p>
          </div>
        </a>
      </div>`;
    })
    .join('');

  movieGallery.insertAdjacentHTML('beforeend', result);
};
