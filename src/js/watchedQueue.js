//   localStorage.setItem('infoAboutChoiseMovie', JSON.stringify(movieId));

import { libraryMovieGallery } from './libraryMovieGallary';
const btnQueue = document.querySelector('.modal-add-queue-button');
const btnWatch = document.querySelector('.modal-add-watched-button');
const galleryLibWatched = document.querySelector('.gallery__library-watched');
const galleryLibQueue = document.querySelector('.gallery__library-queue');

btnWatch.addEventListener('click', addToWatched);
btnQueue.addEventListener('click', addToQueue);

const addedMovie = localStorage.getItem('infoAboutChoiseMovie');
 
function addToWatched(e) {
 if (!e.target.classList.contains("modal-add-watched-button")) {
    return;
  }
    console.log(addedMovie);
    galleryLibWatched.insertAdjacentHTML('beforeend', libraryMovieGallery(JSON.parse(addedMovie)));
localStorage.removeItem('infoAboutChoiseMovie');
}
function addToQueue() {
    galleryLibQueue.insertAdjacentHTML('beforeend', libraryMovieGallery(JSON.parse(addedMovie)));
    localStorage.removeItem('infoAboutChoiseMovie');
}