// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const div = document.querySelector('.gallery');
const galleryRender = galleryItems =>
  galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`,
    ''
  );

const insertImages = string => {
  div.insertAdjacentHTML('beforeend', string);
};

const results = galleryRender(galleryItems);
insertImages(results);

// 777777777777777777

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
