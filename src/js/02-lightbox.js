import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");

galleryContainerEl.innerHTML = createGalleryMarkup(galleryItems);

addAttributesForSimpleLightbox(galleryContainerEl);
//const lightbox = new SimpleLightbox({ elements: ".gallery > li > a" });

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li><a 
        class="gallery__item" 
      href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a></li>`;
    })
    .join("");
}

function addAttributesForSimpleLightbox(galleryEl) {
  [...galleryEl.getElementsByTagName("a")].map((el) => {
    el.dataset.lightbox = "gallery";
    el.dataset.title = el.getElementsByTagName("img")[0].alt;
  });
}
