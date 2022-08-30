//   localStorage.setItem('infoAboutChoiseMovie', JSON.stringify(movieId));
import { arrQ, arrW, getArrLoc } from './getLocal';
import { libraryMovieGallery } from './libraryMovieGallary';
import { modalId } from './modal';
export function addToLib() {
  const galleryLibWatched = document.querySelector('.gallery__library-watched');
  const galleryLibQueue = document.querySelector('.gallery__library-queue');
  getArrLoc();
  for (let movie of arrW) {
    galleryLibWatched.insertAdjacentHTML('beforeend', libraryMovieGallery(JSON.parse(localStorage.getItem(movie))));
    modalId(galleryLibWatched);
  }
   for (let movie of arrQ) {
     galleryLibQueue.insertAdjacentHTML('beforeend', libraryMovieGallery(JSON.parse(localStorage.getItem(movie))));
    modalId(galleryLibQueue);
  }

 }