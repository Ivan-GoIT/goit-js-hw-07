import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const backdropImg = basicLightbox.create(`<img >`);
galleryContainerEl.innerHTML = createGalleryMarkup(galleryItems);

galleryContainerEl.addEventListener("click", onGalleryImageClick);

document.addEventListener("keydown", onEscKeyDownBackdropClose);

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

  const originalImgUrl = event.target.dataset.source;
  backdropImg.element().querySelector("img").src = originalImgUrl;
  backdropImg.show();
}


function onEscKeyDownBackdropClose(event) {
    if (backdropImg.visible() && event.key === "Escape") {
    backdropImg.close();
  }
  return;
 }
