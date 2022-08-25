export { renderMovieGallery };

const renderMovieGallery = async data => {
  const result = data?.results
    .map(
      ({
        poster_path,
        original_title,
        genre_ids,
        release_date,
      }) => `<div class="gallery__card">
        <a class="gallery__item" href="">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="" loading="lazy" />
          <div class="gallery__item-info">
            <p class="gallery__item-title">
              ${original_title}
            </p>
            <p class="gallery__item-text">
              ${genre_ids} | ${release_date}
            </p>
          </div>
        </a>
      </div>`
    )
    .join('');

  movieGallery.insertAdjacentHTML('beforeend', result);
};
