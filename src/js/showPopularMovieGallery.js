import { renderMovieGallery } from './renderMovieGallery';
import { getPopularMovies } from './getFetch';

export function showPopularMovieGallery(numberPage) {
  

  getPopularMovies(numberPage)
    .then(data => {
      const filmsArray = data.results;
      console.log(filmsArray);
      renderMovieGallery(filmsArray);
      // console.log(modalOpenLink)
    })
    .catch(error => console.log(error));
}
// import {modalOpenLink} from './modal'
