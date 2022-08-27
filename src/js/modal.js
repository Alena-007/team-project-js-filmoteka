
import { getMovieById } from './getFetch';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const backdropEl = document.querySelector(".backdrop")
const modalClosedBtEl = document.querySelector(".modal-close-button")
const modalEl = document.querySelector(".modal")
const modalOpenLink = document.querySelector(".gallery__item")
// const buttonIdEl = document.querySelector("#by-id")

modalOpenLink.addEventListener("click", onOpenModal)

modalEl.style.visibility = "hidden"



// ВАРИАНТ С ЛАЙТБОКСОМ


// function fetchOneMovieInfo(id) {
//  getMovieById(id)
//     .then(data => ({
//       ...data,
//     //   popularity: data.popularity.toFixed(1),
//     }));
// }



// function renderMovieInfo({ poster_path, title, vote_average, vote_count, popularity, original_title, genre_ids, overview, }) {
//     // const readyMovieDiscriprtion =
//     return `<div class="modal-card">
//             <img src="${poster_path}" alt="${title}poster" class="modal-card-poster" />

//             <div class="modal-movie-info-part">
//               <h2 class="modal-movie-title">${title}</h2>

//               <table class="modal-property-table-info">
//                 <tbody class="modal-table-body-info">
//                   <tr class="modal-property-item" height="16">
//                     <td class="modal-property-vote modal-property-name">
//                       Vote / Votes
//                     </td>
//                     <td class="modal-property-vote-value modal-property-value">
//                       <p class="modal-vote-value">${vote_average}</p>
//                       <span> &nbsp/&nbsp </span>
//                       <p class="modal-votes-value">${vote_count}</p>
//                     </td>
//                   </tr>
//                   <tr class="modal-property-item" height="16">
//                     <td class="modal-property-popularity modal-property-name">
//                       Popularity
//                     </td>
//                     <td
//                       class="modal-property-popularity-value modal-property-value"
//                     >
//                       ${popularity}
//                     </td>
//                   </tr>
//                   <tr class="modal-property-item" height="16">
//                     <td
//                       class="modal-property-original-title modal-property-name"
//                     >
//                       Original Title
//                     </td>
//                     <td
//                       class="modal-property-original-value modal-property-value"
//                     >
//                       ${original_title}
//                     </td>
//                   </tr>
//                   <tr class="modal-property-item" height="16">
//                     <td class="modal-propery-genre modal-property-name">
//                       Genre
//                     </td>
//                     <td class="modal-propery-genre-value modal-property-value">
//                       ${genre_ids}
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>

//               <h3 class="modal-about-title">ABOUT</h3>
//               <p class="modal-about-text">
//                ${overview}
//               </p>
//               <div class="modal-button-wrap">
//                 <button
//                   type="button"
//                   class="modal-add-watched-button modal-button"
//                 >
//                   ADD TO WATCHED
//                 </button>

//                 <button
//                   type="button"
//                   class="modal-add-queue-button modal-button"
//                 >
//                   ADD TO QUEUE
//                 </button>
//               </div>
//             </div>
//           </div>`
// }

// export function onOpenModal(e) {
//     e.preventDefault();

    // Ниже ругается then

    // fetchOneMovieInfo(e.target.dataset.id)
    //     .then(data => {
    //         if (e.target.nodeName !== 'A') return;

    //         //   const markup = renderMovieInfo(data);
    //         const modal = basicLightbox.create(renderMovieInfo());

    //         modal.show();

    //         //   const modalClosedBtEl = document.querySelector('.modal-close-btn')
    //         modalClosedBtEl.addEventListener("click", onCloseModal);
            
    //         window.addEventListener('keydown', closeModalByEscape);

    
    //         function onCloseModal(e) {
    //             modal.close();
    //             window.removeEventListener('keydown', closeModalByEscape);
    //         }

    //         function closeModalByEscape(e) {
    //             if (e.code === 'Escape') {
    //                 modal.close();
    //                 window.removeEventListener('keydown', closeModalByEscape);
    //             }
    //         }
    //     }
    // }





// ВАРИАНТ ДАЖЕ ОТКРЫВАЛ ПО КЛИКУ МОДАЛКУ, НО СЛЕТЕЛО


function createMovieInfo(data) {
    getMovieById(data).then(movie => {
        modalEl.innerHTML = ''
        // renderMovieInfo(movie.data)
        modalEl.insertAdjacentHTML('beforeend', renderMovieInfo(movie.data))
    })
    .catch('error')
}


function renderMovieInfo({ poster_path, title, vote_average, vote_count, popularity, original_title, genre_ids, overview, }) {
    // const readyMovieDiscriprtion =
    return `<div class="modal-card">
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
          </div>`
    
    // modalEl.insertAdjacentHTML("beforeend", readyMovieDiscriprtion)
}



export function onOpenModal(data) {

    backdropEl.classList.remove('is-hidden')
    modalClosedBtEl.addEventListener("click", onCloseModal)
    createMovieInfo(data)
    // modalEl.style.visibility = "visible"
}
 
export function onCloseModal() {
    modalClosedBtEl.removeEventListener("click", onCloseModal)
    // modalEl.style.visibility = "hidden"
    modalClosedBtEl.removeEventListener("click", onCloseModal)

}


// ПЕРЕБОР С МЕПОМ
    
    // const movieDiscription = movieInfo
    //     .map(({ poster_path, title, vote_average, vote_count, popularity, original_title, genre_ids, overview, }) => {
    //     return `
        //     <div class="modal-card">
        //     <img src="${poster_path}" alt="${title}poster" class="modal-card-poster" />

        //     <div class="modal-movie-info-part">
        //       <h2 class="modal-movie-title">${title}</h2>

        //       <table class="modal-property-table-info">
        //         <tbody class="modal-table-body-info">
        //           <tr class="modal-property-item" height="16">
        //             <td class="modal-property-vote modal-property-name">
        //               Vote / Votes
        //             </td>
        //             <td class="modal-property-vote-value modal-property-value">
        //               <p class="modal-vote-value">${vote_average}</p>
        //               <span> &nbsp/&nbsp </span>
        //               <p class="modal-votes-value">${vote_count}</p>
        //             </td>
        //           </tr>
        //           <tr class="modal-property-item" height="16">
        //             <td class="modal-property-popularity modal-property-name">
        //               Popularity
        //             </td>
        //             <td
        //               class="modal-property-popularity-value modal-property-value"
        //             >
        //               ${popularity}
        //             </td>
        //           </tr>
        //           <tr class="modal-property-item" height="16">
        //             <td
        //               class="modal-property-original-title modal-property-name"
        //             >
        //               Original Title
        //             </td>
        //             <td
        //               class="modal-property-original-value modal-property-value"
        //             >
        //               ${original_title}
        //             </td>
        //           </tr>
        //           <tr class="modal-property-item" height="16">
        //             <td class="modal-propery-genre modal-property-name">
        //               Genre
        //             </td>
        //             <td class="modal-propery-genre-value modal-property-value">
        //               ${genre_ids}
        //             </td>
        //           </tr>
        //         </tbody>
        //       </table>

        //       <h3 class="modal-about-title">ABOUT</h3>
        //       <p class="modal-about-text">
        //        ${overview}
        //       </p>
        //       <div class="modal-button-wrap">
        //         <button
        //           type="button"
        //           class="modal-add-watched-button modal-button"
        //         >
        //           ADD TO WATCHED
        //         </button>

        //         <button
        //           type="button"
        //           class="modal-add-queue-button modal-button"
        //         >
        //           ADD TO QUEUE
        //         </button>
        //       </div>
        //     </div>
        //   </div>`})
        // .join("");
    // modalEl.insertAdjacentHTML("beforeend", movieDiscription)
    




//ФУНКЦИЯ ДЛЯ ЕСКЕЙПА

            
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