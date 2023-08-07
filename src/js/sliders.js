
const aboutTextButton = document.querySelector('.about__text-expand');
const aboutTextContent = document.querySelector('.about__text-content');

const brandShowButton = document.querySelector('.brand-slider__show-button');
const brandWrapper = document.querySelector('.brand-slider__swiper-wrapper');


const deviceShowButton = document.querySelector('.brand-slider__show-button--device');
const deviceWrapper = document.querySelector('.brand-slider__swiper-wrapper--device');

aboutTextButton.addEventListener('click', function () {
  aboutTextContent.classList.toggle('about__text-content--opened');
  aboutTextButton.classList.toggle('about__text-expand--opened');
  if (aboutTextButton.textContent === "Читать далее") {
    aboutTextButton.textContent = "Свернуть";
  } else {
    aboutTextButton.textContent = "Читать далее";
  }
});

brandShowButton.addEventListener('click', function () {
  brandWrapper.classList.toggle('brand-slider__swiper-wrapper--full');
  brandShowButton.classList.toggle('brand-slider__show-button--showed');
  if (brandShowButton.textContent === "Показать все") {
    brandShowButton.textContent = "Скрыть";
  } else {
    brandShowButton.textContent = "Показать все";
  }
});

deviceShowButton.addEventListener('click', function () {
  deviceWrapper.classList.toggle('brand-slider__swiper-wrapper--full');
  deviceShowButton.classList.toggle('brand-slider__show-button--showed');
  if (deviceShowButton.textContent === "Показать все") {
    deviceShowButton.textContent = "Скрыть";
  } else {
    deviceShowButton.textContent = "Показать все";
  }
});
