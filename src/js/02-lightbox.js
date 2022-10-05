import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");

galleryContainerEl.innerHTML = createGalleryMarkup(galleryItems);

[...galleryContainerEl.getElementsByTagName('a')].map(el => { el.dataset.lightbox = 'gallery'; el.dataset.title= })
//const gallery=new SimpleLightbox('show.simplelightbox',)

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a 
        class="gallery__item" 
      href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`;
    })
    .join("");
}
