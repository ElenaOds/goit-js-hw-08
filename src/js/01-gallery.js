import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('.gallery__link');
  galleryLink.href = element.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;
  galleryImage.setAttribute('data-source', element.preview);

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
  items.push(galleryItem);
});

gallery.append(...items);

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const selectedImage = event.target.getAttribute('data-source');

  const instance = basicLightbox.create(
    `<div class='modal'>
  <img src="${selectedImage}" width=800px, height=600px>
  </div>`,
    {
      onClose: instance => {
        document.removeEventListener('keydown', onCloseModal);
      },
    }
  );
  instance.show();

  function onCloseModal(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
  document.addEventListener('keydown', onCloseModal);
});

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });