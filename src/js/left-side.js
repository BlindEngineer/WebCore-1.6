const modalMenu = document.querySelector('.left-side');
export const wrapper = document.querySelector('.wrapper');
const burgerButton = document.querySelector('.round-button--line--right');
const closeModalMenu = document.querySelector('.left-side__button-image--modal-close');

burgerButton.addEventListener('click',function (evt) {
  evt.stopPropagation();
  modalMenu.classList.add('left-side--active');
  wrapper.classList.add('wrapper--hide');
});

closeModalMenu.addEventListener('click',function () {
  modalMenu.classList.remove('left-side--active');
  wrapper.classList.remove('wrapper--hide');
});

wrapper.addEventListener('click',function () {
  modalMenu.classList.remove('left-side--active');
  wrapper.classList.remove('wrapper--hide');
});

document.addEventListener('keydown', function(evt) {
  if (evt.key === "Escape") {
    modalMenu.classList.remove('left-side--active');
    wrapper.classList.remove('wrapper--hide');
  }});

