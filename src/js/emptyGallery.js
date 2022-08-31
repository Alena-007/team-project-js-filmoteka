const galleryWatched = document.querySelector('.gallery__library-watched');
const galleryQueue = document.querySelector('.gallery__library-queue');
// console.log(galleryWatched.length)

function emptyWatched() {
  if (galleryWatched.firstChild === null) {
    galleryWatched.insertAdjacentHTML(
      'beforeend',
      `<div>
      <b class="empty-library-watched">OOOPPPSSS!!! NO MOVIE</b>
         <img class="empty-library-watched__image" src="https://i.kym-cdn.com/photos/images/original/000/954/924/bd1.jpg" alt="We Have a cookies"></img>
        </div>`
    );
  }
}
emptyWatched();

function emptyQueue() {
  if (galleryQueue.firstChild === null) {
    galleryQueue.insertAdjacentHTML(
      'beforeend',
      `<div>
      <b class="empty-library-watched">OOOPPPSSS!!! NO MOVIE</b>
        <img class="empty-library-watched__image" src="https://i.kym-cdn.com/photos/images/original/000/954/924/bd1.jpg" alt="We Have a cookies"></img>
       </div>`
    );
  }
}
emptyQueue();
