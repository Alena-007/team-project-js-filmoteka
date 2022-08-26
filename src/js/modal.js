
// import { getMovieById } from './getFetch';

const modalClosedBtEl = document.querySelector(".modal-close-button")
const modalEl = document.querySelector(".modal")
const modalOpenLink = document.querySelector(".gallery__item")

modalOpenLink.addEventListener("click", onOpenModal)
modalEl.style.visibility = "hidden"


export function onOpenModal(movieInfo) {
    modalClosedBtEl.addEventListener("click", onCloseModal)
    
    const movieDiscription = movieInfo
        .map(({ poster_path, title, vote_average, vote_count, popularity, original_title, genre_ids, overview, }) => {
        return `<div class="backdrop is-hidden" data-modal>
      <div class="modal">
        <div class="modal-container">
          <button type="button" class="modal-close-button" data-modal-close>
            <svg
              class="modal-close-icon"
              width="14"
              height="14"
              fill="black"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"
              ></path>

              <!-- <use href="./images/modal-close-icon.svg"></use> -->
              <!-- href="./images/icons.svg#icon-modal-close" -->
            </svg>
          </button>

          <div class="modal-card">
            <img src="${poster_path}" alt="${title}poster" class="modal-card-poster" />

            <div class="modal-movie-info-part">
              <h2 class="modal-movie-title">${title}</h2>

              <table class="modal-property-table-info">
                <tbody class="modal-table-body-info">
                  <tr class="modal-property-item" height="16">
                    <td class="modal-property-vote modal-property-name">
                      Vote / Votes
                    </td>
                    <td class="modal-property-vote-value modal-property-value">
                      <p class="modal-vote-value">${vote_average}</p>
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
                      ${popularity}
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
                      ${genre_ids}
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
          </div>
        </div>
      </div>
    </div> `})
        .join("");
    modalEl.insertAdjacentHTML("beforeend", movieDiscription)
modalEl.style.visibility = "visible"
 }


export function onCloseModal(movieInfo) { 
    modalEl.style.visibility = "hidden"
    modalClosedBtEl.removeEventListener("click", onCloseModal)

}


// modalEl.addEventListener("click", modalEscape)

// function modalEscape (e){
//     e.preventDefault()

//     const eventItem = event.target.dataset.source
//     const modalEl = simplelightbox.create(
//         `<img src="${eventItem}" width="800" height="600">`,
    
//         {
//     onShow: () => window.addEventListener("keydown", escape ),
//     onClose: () => window.removeEventListener("keydown", escape)
//     }
//     )
//     modalEl.show()

//     function escape (event){
//     if (event.code === "Escape"){
//     modalEl.close()   
// }
// }    
// }