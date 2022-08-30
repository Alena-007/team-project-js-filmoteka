import { galleryLibQueue, galleryLibWatched } from './modal';

export function btnFilterLib() {
const btnWatched = document.querySelector('.btn-watched');
const btnQueue = document.querySelector('.btn-queue');

btnQueue.addEventListener('click', showQueue);
btnWatched.addEventListener('click', showWatched);
    
if ( localStorage.getItem('currentFilterBtn') === 'watched') {
    showWatched();
} else if( localStorage.getItem('currentFilterBtn') === 'queue'){
    showQueue();
}
  function showQueue(e) {
     localStorage.setItem('currentFilterBtn', 'queue');
galleryLibWatched .classList.add('visually-hidden');
btnWatched.classList.remove('current-btn_library');
btnQueue.classList.add('current-btn_library');
galleryLibQueue.classList.remove('visually-hidden');
}
    function showWatched(e) {
    localStorage.setItem('currentFilterBtn', 'watched');
    btnWatched.classList.add('current-btn_library');
    btnQueue.classList.remove('current-btn_library');
galleryLibQueue.classList.add('visually-hidden');
galleryLibWatched .classList.remove('visually-hidden');
}
}

