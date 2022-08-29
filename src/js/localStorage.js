const btnQueue = document.querySelector('.modal-add-queue-button');
const btnWatch = document.querySelector('.modal-add-watched-button');

function checkBtnWatch(e) {
  e.target.dataset.id;
  const movieId = e.target.dataset.id;

  let arr1 = localStorage.getItem('choiseMovieWatched');
  arr1 = arr1 ? JSON.parse(arr1) : [];

  const inStorage = arr1.find(storageId => storageId === movieId);

  if (!inStorage) {
    addToWatched(movieId);
    return;
  } else {
    removeFromWatch(movieId);
  }
}

function addToWatched(id) {
  let arr = localStorage.getItem('choiseMovieWatched');
  arr = arr ? JSON.parse(arr) : [];
  const movieId = String(id);
  arr.push(movieId);
  const movieEl = JSON.stringify(arr);
  localStorage.setItem('choiseMovieWatched', movieEl);
  btnWatch.textContent = 'REMOVE FROM WATCHED';
  return;
}

function removeFromWatch(id) {
  let arr = localStorage.getItem('choiseMovieWatched');
  arr = arr ? JSON.parse(arr) : [];

  const filterArr = arr.filter(localId => localId !== id);
  const movieEl = JSON.stringify(filterArr);

  localStorage.setItem('choiseMovieWatched', movieEl);
  btnWatch.textContent = 'ADD TO WATCHED';
  if (arr.length === 0) {
    localStorage.removeItem('choiseMovieWatched');
    return;
  }
}

function checkBtnQueue(e) {
  e.target.dataset.id;
  const movieId = e.target.dataset.id;

  let arr1 = localStorage.getItem('choiseMovieQueue');
  arr1 = arr1 ? JSON.parse(arr1) : [];

  const inStorage = arr1.find(storageId => storageId === movieId);

  if (!inStorage) {
    addToQueue(movieId);
    return;
  } else {
    removeFromQueue(movieId);
  }
}

function addToQueue(id) {
  let arr = localStorage.getItem('choiseMovieQueue');
  arr = arr ? JSON.parse(arr) : [];

  const movieId = String(id);

  arr.push(movieId);
  const movieEl = JSON.stringify(arr);

  localStorage.setItem('choiseMovieQueue', movieEl);
  btnQueue.textContent = 'REMOVE FROM QUEUE';
  return;
}

function removeFromQueue(id) {
  let arr2 = localStorage.getItem('choiseMovieQueue');
  arr2 = arr2 ? JSON.parse(arr2) : [];

  const filterArr = arr2.filter(localId => localId !== id);
  const movieEl = JSON.stringify(filterArr);

  localStorage.setItem('choiseMovieQueue', movieEl);
  btnQueue.textContent = 'ADD TO QUEUE';

  if (arr2.length === 0) {
    localStorage.removeItem('choiseMovieQueue');
    return;
  }
}


export { checkBtnWatch, checkBtnQueue };