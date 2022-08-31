import { getPopularMovies } from './getFetch';
import { showPopularMovieGallery } from './showPopularMovieGallery';
import { movieGallery } from './renderMovieGallery';
import Pagination from 'tui-pagination';

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
};

export function getPaginationPopular() {
  const paginationPopular = new Pagination(
    'tui-pagination-container1',
    options
  );

  function clear() {
    movieGallery.innerHTML = '';
  }
  paginationPopular.on('afterMove', event => {
    clear();
    showPopularMovieGallery(event.page);

    window.scrollTo(0, 0);
  });

  getPopularMovies(1)
    .then(data => {
      paginationPopular.reset(data.total_results);
    })
    .catch(error => console.log(error));
}
