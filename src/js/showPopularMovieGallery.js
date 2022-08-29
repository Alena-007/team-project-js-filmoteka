import { renderMovieGallery } from './renderMovieGallery';
import { getPopularMovies } from './getFetch';
import { showLoader, hideLoader } from './loader';

export function showPopularMovieGallery(numberPage) {
  showLoader();

  setTimeout(() => {
    getPopularMovies(numberPage)
      .then(data => {
        const filmsArray = data.results;
        renderMovieGallery(filmsArray);
        hideLoader();
      })
      .catch(error => console.log(error));
  }, 500);

  // getPopularMovies(numberPage)
  //   .then(data => {
  //     const filmsArray = data.results;
  //     renderMovieGallery(filmsArray);
  //     hideLoader();
  //   })
  //   .catch(error => console.log(error));
}
