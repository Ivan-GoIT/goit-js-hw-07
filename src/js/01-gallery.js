import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerEl = document.querySelector(".gallery");
const backdropImg = basicLightbox.create(`<img >`);


galleryContainerEl.innerHTML = createGalleryMarkup(galleryItems);

//addLaizyloadToImg();

galleryContainerEl.addEventListener("click", onGalleryImageClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      console.log(description);
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

  document.addEventListener("keydown", onEscKeyDownBackdropClose);
}

function onEscKeyDownBackdropClose(event) {
    if (!(backdropImg.visible() && event.key === "Escape")) {
      return;
    }
  backdropImg.close();
  document.removeEventListener("keydown", onEscKeyDownBackdropClose);
}
 


function addLaizyloadToImg(galleryContainerEl) {
  //galleryContainerEl.querySelectorAll('img')
  document
    .querySelectorAll(".gallery__image")
    .forEach((imgEl) => (imgEl.loading = "lazy"));
    
    

 }