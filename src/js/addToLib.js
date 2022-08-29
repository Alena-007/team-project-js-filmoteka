//   localStorage.setItem('infoAboutChoiseMovie', JSON.stringify(movieId));

import { libraryMovieGallery } from './libraryMovieGallary';

export function addToLib() {
  const galleryLibWatched = document.querySelector('.gallery__library-watched');
  const galleryLibQueue = document.querySelector('.gallery__library-queue');
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.includes('choiseMovieWatched')) {
      console.log(`${i + 1} element ${key}`)
      galleryLibWatched.insertAdjacentHTML('beforeend', libraryMovieGallery(JSON.parse(localStorage.getItem(key))));
      console.log(`draw element ${key}`)
    } else if (key.includes('choiseMovieQueue')) {
      console.log(`${i + 1} element Q ${key}`)
      galleryLibQueue.insertAdjacentHTML('beforeend', libraryMovieGallery(JSON.parse(localStorage.getItem(key))));
    }
  
  }
  localStorage.clear();
}