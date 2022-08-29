
import { getMovieById } from './getFetch';
import { checkBtnWatch, checkBtnQueue } from './localStorage';
import { WATCHSTORAGE_KEY, QUEUESTORAGE_KEY } from './localKey';



export function modalId(dom) {
  const modalBox = document.querySelector('.modal-card')
const modalBackdrop = document.querySelector('.backdrop');
const closeButton = document.querySelector('.modal-close-button');
  if (dom === document.querySelector('.gallery')) {

    const gallery = document.querySelector('.gallery');
   gallery.addEventListener('click', clickOnMovieHandler);
  } else if (dom === document.querySelector('.gallery__library-watched')) {
    
   const galleryLibWatched = document.querySelector('.gallery__library-watched');
    galleryLibWatched.addEventListener('click', clickOnMovieHandler);
  } else if (dom === document.querySelector('.gallery__library-queue')) {
    
     const galleryLibQueue = document.querySelector('.gallery__library-queue');
   galleryLibQueue.addEventListener('click', clickOnMovieHandler); 
 }
let movieId = null;
async function clickOnMovieHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }
  movieId = e.target.dataset.id;
  console.log(movieId)
  
  await fetchById(movieId);
  // textModalBtn(movieId); ////// треба ще зробити
}

async function fetchById(id) {
  try {
   const movieId = await getMovieById(id);
// console.log(movieId)
    renderMovieModal(movieId);

    const btnQueue = document.querySelector('.modal-add-queue-button');
    const btnWatch = document.querySelector('.modal-add-watched-button');

    const stringId = String(id);
    let arr = localStorage.getItem(WATCHSTORAGE_KEY);
    arr = arr ? JSON.parse(arr) : [];
    let arr2 = localStorage.getItem(QUEUESTORAGE_KEY);
    arr2 = arr2 ? JSON.parse(arr2) : [];
    const inStorage = arr.find(storageId => storageId === stringId);
    const inStorage2 = arr2.find(storageId => storageId === stringId);

    btnWatch.textContent = inStorage ? 'REMOVE FROM WATCHED' : 'ADD TO WATCHED';
    btnQueue.textContent = inStorage2 ? 'REMOVE FROM QUEUE' : 'ADD TO QUEUE';

    btnWatch.dataset.id = id;
    btnQueue.dataset.id = id;

    btnWatch.addEventListener('click', checkBtnWatch);
    btnQueue.addEventListener('click', checkBtnQueue);
  } catch (error) {
    console.error('error');
  }
}

function renderMovieModal(data) {
  const modalMarkup = renderMovieInfo(data);
  try {
    modalBox.innerHTML = modalMarkup;
    console.log(modalBox)

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

  modalBackdrop.removeEventListener('click', modalClosinByBackdrop);
  closeButton.removeListener('click', modalClosing);
  window.removeEventListener('keydown', modalClosinByEsc);
  btnWatch.removeEventListener('click', checkBtnWatch);
  btnQueue.removeEventListener('click', checkBtnQueue);

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

// function addToWatchedLoc() {
   
//     getMovieById(movieId).then(info => {
//         localStorage.setItem(`choiseMovieWatched ${movieId}`, JSON.stringify(info));
//         return movieId;
//     });
// }

// function addToQueue() {
//       getMovieById(movieId).then(info => {
//         localStorage.setItem(`choiseMovieQueue ${movieId}`, JSON.stringify(info));
//         return movieId;
//     });
// } 


//////
function renderMovieInfo({ poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview, }) {


  const genreNames = genres.map(genre => genre.name)
    let listGenreNames = genreNames.slice(0, 2)
    if (genreNames.length >= 2 || genreNames.length === 0) {
    listGenreNames.push('Others');
  }
  const genreInfo = listGenreNames.join(', ');

    return `<div class="modal-card">
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}poster" class="modal-card-poster" />

            <div class="modal-movie-info-part">
              <h2 class="modal-movie-title">${title}</h2>

              <table class="modal-property-table-info">
                <tbody class="modal-table-body-info">
                  <tr class="modal-property-item" height="16">
                    <td class="modal-property-vote modal-property-name">
                      Vote / Votes
                    </td>
                    <td class="modal-property-vote-value modal-property-value">
                      <p class="modal-vote-value">${Math.round(vote_average*10)/10}</p>
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
                      ${Math.round(popularity *10)/10}
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
                ></button>

                <button
                  type="button"
                  class="modal-add-queue-button modal-button"
                ></button>
              </div>
            </div>
          </div>`
}
  
}

