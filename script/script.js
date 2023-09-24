"use strict";

//For hiding the images Initially
const initialHideImages = document.querySelectorAll(".hide");

initialHideImages.forEach((initialHideImage) => {
  initialHideImage.style.display = "none";
});

//For SlideShow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide-image");

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000);
