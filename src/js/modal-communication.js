import {wrapper} from "./left-side";

const modalFeedbackCloser = document.querySelector('.modal-communication__close-button--feedback');
const modalFeedback = document.querySelector('.modal-communication--feedback');
const modalFeedbackOpeners = document.getElementsByClassName('round-button--feedback');

const modalCallCloser = document.querySelector('.modal-communication__close-button--call');
const modalCall = document.querySelector('.modal-communication--call');
const modalCallOpeners = document.getElementsByClassName('round-button--call');


console.log(modalFeedbackOpeners);
console.log(modalCallOpeners);

for (let button of modalFeedbackOpeners) {
  button.addEventListener('click', function () {
    modalFeedback.classList.add('modal-communication--opened');
    wrapper.classList.add('wrapper--modal-opened');
  });
}

for (let button of modalCallOpeners) {
  button.addEventListener('click', function () {
    modalCall.classList.add('modal-communication--opened');
    wrapper.classList.add('wrapper--modal-opened');
  });
}


modalFeedbackCloser.addEventListener('click', function () {
  modalFeedback.classList.remove('modal-communication--opened');
  wrapper.classList.remove('wrapper--modal-opened');
});

modalCallCloser.addEventListener('click', function () {
  modalCall.classList.remove('modal-communication--opened');
  wrapper.classList.remove('wrapper--modal-opened');
});

document.addEventListener('keydown', function(evt) {
  if (evt.key === "Escape") {
    modalFeedback.classList.remove('modal-communication--opened');
    modalCall.classList.remove('modal-communication--opened');
    wrapper.classList.remove('wrapper--modal-opened');
  }});
