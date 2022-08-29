

const upButton = document.querySelector('.up-button-container');

const trackScroll = () => {
    console.log("hello")
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      upButton.classList.add('visuallyhidden');
    }
    if (scrolled < coords) {
      upButton.classList.remove('visuallyhidden');
    }
}
  
const backToTop = () => {
    console.log("hello")
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
}
  
window.addEventListener('scroll', trackScroll);
upButton.addEventListener('click', backToTop);



// window.addEventListener('scroll', hideElOnScroll(upButton));
// upButton.addEventListener('click', toPageTopOnClick);

// function hideElOnScroll(el) {
//   return function hideOnScroll(e) {
//     if (window.pageYOffset < document.documentElement.clientHeight) {
//       el.classList.add('visuallyhidden');
//     } else {
//       el.classList.remove('visuallyhidden');
//     }
//   };
// }

// function toPageTopOnClick(e) {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }


