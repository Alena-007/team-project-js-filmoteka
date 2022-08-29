
export function btnFilterLib() {
const btnWatched = document.querySelector('.btn-watched');
const btnQueue = document.querySelector('.btn-queue');
const galleryLWatched = document.querySelector('.gallery__library-watched');
const galleryLQueue = document.querySelector('.gallery__library-queue');
    
btnQueue.addEventListener('click', showQueue);
btnWatched.addEventListener('click', showWatched);
    
if (btnWatched.classList.contains('current-btn_library')) {
    showWatched();
} else if(btnQueue.classList.contains('current-btn_library')){
    showQueue();
}
function showQueue(e) {
galleryLWatched.classList.add('visually-hidden');
btnWatched.classList.remove('current-btn_library');
btnQueue.classList.add('current-btn_library');
galleryLQueue.classList.remove('visually-hidden');
}
function showWatched(e) {
galleryLQueue.classList.add('visually-hidden');
galleryLWatched.classList.remove('visually-hidden');
}
}

