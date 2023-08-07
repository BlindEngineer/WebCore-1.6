// import * as Swiper from 'swiper';
import '../scss/style.scss';
import  * as sliders from  './sliders';
import  * as leftSide from  './left-side';
import  * as modalCom from  './modal-communication';


const mySwiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: false,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
      768: {
          enabled: false,
      }
  }
});

console.log('123 test!!');




