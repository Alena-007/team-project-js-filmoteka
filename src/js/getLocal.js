export  let arrW = [];
export let arrQ = [];
export function getArrLoc() {

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.includes('choiseMovieWatched')) {
        arrW.push(key);
    } else if (key.includes('choiseMovieQueue')) {
     arrQ.push(key);
    }
  }
}
