import { getPopularMovies } from './getFetch';
import { showPopularMovieGallery } from './showPopularMovieGallery';
import { movieGallery } from './renderMovieGallery';
import Pagination from 'tui-pagination';

export function getPagination() {
    
const pagination = new Pagination('tui-pagination-container1', {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
});
  
pagination.on('afterMove', event => {
  movieGallery.innerHTML = '';
  showPopularMovieGallery(event.page);
     window.scrollTo(0, 0);
});

getPopularMovies(1)
  .then(data => {
    pagination.reset(data.total_results);
    
  })
  .catch(error => console.log(error));
}