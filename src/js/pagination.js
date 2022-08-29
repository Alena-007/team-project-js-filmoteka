import { getPopularMovies } from './getFetch';
import { showPopularMovieGallery } from './showPopularMovieGallery';
import { movieGallery } from './renderMovieGallery';
import Pagination from 'tui-pagination';
import { searchMovie, galleryEl } from './onSearchMovie';

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  }

export function getPaginationPopular() {

  const paginationPopular = new Pagination('tui-pagination-container1', options);
  
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
 export function getPaginationSearch(queryP) {
    const paginationSearch = new Pagination('tui-pagination-container2', {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  });
function clear() {
  galleryEl.innerHTML = '';
    }
paginationSearch.on('afterMove', event => {
   clear();
  searchMovie (queryP, event.page);
   window.scrollTo(0, 0);
});

    paginationSearch.reset(1000);
}
