
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
import '../css/common.css';
import '../css/01-gallery.css';


const divGallery = document.querySelector(".gallery");


const imgItem = galleryItems.map(item => {
    return `<div class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
    </div>`
}).join("");
// Change code below this line


divGallery.insertAdjacentHTML("afterbegin", imgItem);


const lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});



console.log(galleryItems);