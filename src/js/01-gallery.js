import { galleryItems } from "./gallery-items.js";
// Change code below this line
//import * as basicLightbox from "src/node_modules/basiclightbox/dist/basicLightbox.min.js";

const galleryContainerEl = document.querySelector(".gallery");
galleryContainerEl.innerHTML = createGalleryMarkup(galleryItems);

galleryContainerEl.addEventListener("click", onGalleryImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}

function onGalleryImageClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  const targetImgEl = event.target;
  const originalImgUrl = targetImgEl.dataset.source;
  console.log(2);

  //   const instance = basicLightbox.create(`
  //     <img src="assets/images/image.png" width="800" height="600">
  // `);

  //instance.show();
}
