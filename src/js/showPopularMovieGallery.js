import { renderMovieGallery } from './renderMovieGallery';
import { getPopularMovies } from './getFetch';

export function showPopularMovieGallery() {
  let page = 1;

  getPopularMovies(page)
    .then(data => {
      const filmsArray = data.results;
      console.log(filmsArray);
      renderMovieGallery(filmsArray);
    })
    .catch(error => console.log(error));
}
