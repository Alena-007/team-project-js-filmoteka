import { getPopularMovies } from './getFetch';
import { showPopularMovieGallery } from './showPopularMovieGallery';
import { movieGallery } from './renderMovieGallery';
import Pagination from 'tui-pagination';


export function getPagination() {

function resetPopular() {
  movieGallery.innerHTML = '';
    }
    
const pagination = new Pagination('tui-pagination-container', {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
});

pagination.on('afterMove', event => {
  resetPopular();
  showPopularMovieGallery(event.page);
     window.scrollTo(0, 0);
});

getPopularMovies(1)
  .then(data => {
    pagination.reset(data.total_results);
  })
  .catch(error => console.log(error));

}
