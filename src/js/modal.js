
import { getMovieById } from './getFetch';

const backdrop = document.querySelector(".backdrop")
const modalBox = document.querySelector(".modal-card")

export const gallery = document.querySelector(".gallery")

gallery.addEventListener('click', clickOnMovieHandler);

async function clickOnMovieHandler(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') {
    return;
  }
  let movieId = e.target.dataset.id;
  console.log(movieId)
  
  await fetchById(movieId);
  // textModalBtn(movieId); ////// треба ще зробити
}

async function fetchById(id) {
  try {
    const movieId = await getMovieById(id);
console.log(movieId)
    renderMovieModal(movieId);
   
    const btnQueue = document.querySelector('.modal-add-queue-button');
    const btnWatch = document.querySelector('.modal-add-watched-button');

  } catch (error) {

    console.error('error');
  }
}
function renderMovieModal(data) {
  const modalMarkup = renderMovieInfo(data);
  try {
    modalBox.innerHTML = modalMarkup;
    console.log(modalBox)
    backdrop.classList.add('is-open');
    backdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';

    // writeLogoProdCompany(data);

    const modalBackdrop = document.querySelector('.backdrop');
    const closeButton = document.querySelector('.modal-close-button');

    modalBackdrop.addEventListener('click', modalClosing);
    closeButton.addEventListener('click', modalClosing);
    window.addEventListener('keydown', modalClosinByEsc);
  } catch (error) {
    console.error('error');
  }

}

// закриття модалки(але поки не працює)
function modalClosing() {
  backdrop.classList.remove('is-open');
  backdrop.classList.add('is-hidden')
  document.body.style.overflow = '';
  modalBackdrop.removeEventListener('click', modalClosing);
  closeButton.removeListener('click', modalClosing);
  window.removeEventListener('keydown', modalClosinByEsc);
}
function modalClosinByEsc(event) {
  if (event.code === 'Escape') {
    modalClosing();
  }
}

//////
function renderMovieInfo({ poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview, }) {


  const genreNames = genres.map(genre => genre.name)
  let listGenreNames = genreNames.slice(0, 2).join(", ")

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
                      ${listGenreNames}, Others
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