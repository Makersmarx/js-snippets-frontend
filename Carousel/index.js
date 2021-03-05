// * vars for dom elements
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const nextBtn = document.querySelector('#carousel-button-next');
const prevBtn = document.querySelector('#carousel-button-prev');

// * move to next slide function

const moveToNextSlide = () => {
  hideSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
};

// * move to previous slide function

const moveToPrevSlide = () => {
  hideSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
};

// * hide all slides

const hideSlides = () => {
  for (let el of slides) {
    el.classList.remove('carousel-item-visible');
    el.classList.add('carousel-item-hidden');
  }
};

// * event listeners for buttons

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);
