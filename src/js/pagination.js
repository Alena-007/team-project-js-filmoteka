import { getPopularMovies } from './getFetch';
import { showPopularMovieGallery } from './showPopularMovieGallery';
import Pagination from 'tui-pagination';
import { renderMovieGallery, movieGallery  } from './renderMovieGallery';
import { showLoader, hideLoader } from './loader';

export function getPopolar() {
  const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
};

  const paginationPopular = new Pagination(
    'tui-pagination-container1',
    options
  );
  function showPopularMovieGallery(numberPage) {
    showLoader();

    setTimeout(() => {
      getPopularMovies(numberPage)
        .then(data => {
          const filmsArray = data.results;
           paginationPopular.reset(data.total_results);
          renderMovieGallery(filmsArray);
          hideLoader();
        })
        .catch(error => console.log(error));
    }, 500);
  }
  showPopularMovieGallery(1);

    paginationPopular.on('afterMove', event => {
    movieGallery.innerHTML = '';
    showPopularMovieGallery(event.page);
    window.scrollTo(0, 0);
  });


}


