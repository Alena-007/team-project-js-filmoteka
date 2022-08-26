import { getPopularMovies } from './js/getFetch';
import { getSearchMovies } from './js/getFetch';
import { getMovieById } from './js/getFetch';
import { showPopularMovieGallery } from './js/showPopularMovieGallery';
import { movieGallery} from './js/renderMovieGallery';
import Pagination from 'tui-pagination';
import "tui-pagination/dist/tui-pagination.css";

const popularBtn = document.querySelector('#popular');
const searchBtn = document.querySelector('#search-btn');
const movieByIdBtn = document.querySelector('#by-id');

popularBtn.addEventListener('click', onPopular);
searchBtn.addEventListener('click', onSearch);
movieByIdBtn.addEventListener('click', onMovieById);

showPopularMovieGallery(1);

async function onPopular() {
  const data = await getPopularMovies(1);
  console.log(data);
}

async function onSearch() {
  const data = await getSearchMovies('christmas', 1);
  console.log(data);
}

async function onMovieById() {
  const data = await getMovieById(555);
  console.log(data);
}
function resetPopular() {
  movieGallery.innerHTML = '';
}
const pagination = new Pagination("tui-pagination-container", {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true
});

pagination.on("afterMove", (event) => {
  resetPopular();
showPopularMovieGallery(event.page);
});

  getPopularMovies(1).then(data => {
    pagination.reset(data.total_results);
  })
    .catch(error => console.log(error));

