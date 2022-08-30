import { getMovieById } from './getFetch';
import { arrQ, arrW, getArrLoc } from './getLocal';

export const gallery = document.querySelector('.gallery');
export const galleryLibWatched = document.querySelector('.gallery__library-watched');
export const galleryLibQueue = document.querySelector('.gallery__library-queue');

export function modalId(dom) {
  const modalBox = document.querySelector('.modal-card')
  const modalBackdrop = document.querySelector('.backdrop');
  const closeButton = document.querySelector('.modal-close-button');
  if (dom === gallery) {

    gallery.addEventListener('click', clickOnMovieHandler);
  } else if (dom === galleryLibWatched) {


    galleryLibWatched.addEventListener('click', clickOnMovieHandler);
  } else if (dom === galleryLibQueue) {
    

    galleryLibQueue.addEventListener('click', clickOnMovieHandler); 
 }
  let movieId = null;
  let btnQueue = null;
  let btnWatch = null;
  let keyW = '';
  let keyQ = '';

async function clickOnMovieHandler(e) {
  e.preventDefault();
const upButton = document.querySelector('.up-button-container');
upButton.classList.add('is-hidden')

  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'P') {
    return;
  }
  movieId = e.target.dataset.id;
  getArrLoc();
  keyW = `choiseMovieWatched ${movieId}`;
  keyQ = `choiseMovieQueue ${movieId}`;
  await fetchById(movieId);
  // textModalBtn(movieId); ////// треба ще зробити
}

async function fetchById(id) {
  try {
   const movieIdF = await getMovieById(id);
    renderMovieModal(movieIdF);
    btnQueue = document.querySelector('.modal-add-queue-button');
    btnWatch = document.querySelector('.modal-add-watched-button');
    
   
    if (arrW.includes(keyW)) {
      btnWatch.classList.add('btn-disabled');
      btnWatch.innerHTML = 'remove from watched';
      btnWatch.addEventListener('click', removeFromW);
    } else {
btnWatch.addEventListener('click', addToWatchedLoc);
    }
    if (arrQ.includes(keyQ)) {
      btnQueue.classList.add('btn-disabled');
      btnQueue.innerHTML = 'remove from queue';
       btnQueue.addEventListener('click', removeFromQ);
    } else {
       btnQueue.addEventListener('click', addToQueue);
  }
  } catch (error) {

    console.error('error');
  }
}

function renderMovieModal(data) {
  const modalMarkup = renderMovieInfo(data);
  try {
    modalBox.innerHTML = modalMarkup;

    modalBackdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
    // writeLogoProdCompany(data);

    closeButton.addEventListener('click', modalClosing);
    modalBackdrop.addEventListener('click', modalClosinByBackdrop);
    window.addEventListener('keydown', modalClosinByEsc);
  } catch (error) {
    console.error('error');
  }

}

// закриття модалки

function modalClosing() {
  modalBackdrop.classList.add('is-hidden')
  document.body.style.overflow = '';
  checkRemove();
  modalBackdrop.removeEventListener('click', modalClosinByBackdrop);
  closeButton.removeEventListener('click', modalClosing);
  window.removeEventListener('keydown', modalClosinByEsc);
  btnQueue.removeEventListener('click', addToQueue);
  btnWatch.removeEventListener('click', addToWatchedLoc);
  if (dom !== gallery) {
    window.location.reload();
}
}

function modalClosinByEsc(event) {
  if (event.code === 'Escape') {
    modalClosing();
  }
}

function modalClosinByBackdrop(e) {
    e.preventDefault();
    document.body.style.overflow = '';
    if (e.target.className === 'backdrop') {
        modalClosing();
  }
}

function addToWatchedLoc() {
  btnWatch.classList.add('btn-disabled');
  getMovieById(movieId).then(info => {
    localStorage.setItem(`choiseMovieWatched ${movieId}`, JSON.stringify(info));
  });
    btnWatch.innerHTML = 'remove from watch';
}
  function removeFromW() {
    btnWatch.classList.remove('btn-disabled');
    btnWatch.innerHTML = 'ADD TO WATCH';
}
function addToQueue() {
  btnQueue.classList.add('btn-disabled');
  getMovieById(movieId).then(info => {
    localStorage.setItem(`choiseMovieQueue ${movieId}`, JSON.stringify(info));
  });
    btnQueue.innerHTML = 'remove from queue';
} 
    function removeFromQ() {
    btnQueue.classList.remove('btn-disabled');
    btnQueue.innerHTML = 'ADD TO QUEUE';
}
function checkRemove() {
  if(!btnWatch.classList.contains('btn-disabled')) {
    btnWatch.innerHTML = 'ADD TO WATCHED';
    localStorage.removeItem(`choiseMovieWatched ${movieId}`);
    const index = arrW.indexOf(`choiseMovieWatched ${movieId}`);
    arrW.splice(index, 1);
  }
  if(!btnQueue.classList.contains('btn-disabled')) {
    btnQueue.innerHTML = 'ADD TO QUEUE';
    localStorage.removeItem(`choiseMovieQueue ${movieId}`);
    const index = arrQ.indexOf(`choiseMovieQueue ${movieId}`);
    arrQ.splice(index, 1);
  }
}
//////
function renderMovieInfo({ poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview,id }) {

  const genreNames = genres.map(genre => genre.name)
  let listGenreNames = genreNames.slice(0, 2)
  if (genreNames.length >= 2 || genreNames.length === 0) {
    listGenreNames.push('Others');
  }
  const genreInfo = listGenreNames.join(', ');
  return `<div class="modal-card">
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}poster" class="modal-card-poster" />

            <div class="modal-movie-info-part">
              <h2 class="modal-movie-title" data-id=${id}>${title}</h2>

              <table class="modal-property-table-info">
                <tbody class="modal-table-body-info">
                  <tr class="modal-property-item" height="16">
                    <td class="modal-property-vote modal-property-name">
                      Vote / Votes
                    </td>
                    <td class="modal-property-vote-value modal-property-value">
                      <p class="modal-vote-value">${Math.round(vote_average * 10) / 10}</p>
                      <span> &nbsp/&nbsp </span>
                      <p class="modal-votes-value">${vote_count}</p>
                    </td>
                  </tr>
                  <tr class="modal-property-item" height="16">
                    <td class="modal-property-popularity modal-property-name">
                      Popularity
                    </td>
                    <td
                      class="modal-property-popularity-value modal-property-value"
                    >
                      ${Math.round(popularity * 10) / 10}
                    </td>
                  </tr>
                  <tr class="modal-property-item" height="16">
                    <td
                      class="modal-property-original-title modal-property-name"
                    >
                      Original Title
                    </td>
                    <td
                      class="modal-property-original-value modal-property-value"
                    >
                      ${original_title}
                    </td>
                  </tr>
                  <tr class="modal-property-item" height="16">
                    <td class="modal-propery-genre modal-property-name">
                      Genre
                    </td>
                    <td class="modal-propery-genre-value modal-property-value">
                      ${genreInfo}
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 class="modal-about-title">ABOUT</h3>
              <p class="modal-about-text">
               ${overview}
              </p>
              <div class="modal-button-wrap">
                <button
                  type="button"
                  class="modal-add-watched-button modal-button"
                >
                  ADD TO WATCHED
                </button>

                <button
                  type="button"
                  class="modal-add-queue-button modal-button"
                >
                  ADD TO QUEUE
                </button>
              </div>
            </div>
          </div>`
}
  
}

