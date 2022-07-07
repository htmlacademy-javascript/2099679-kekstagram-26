import './pictures.js';
import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadOpen = document.querySelector('body');
const uploadCancelButton = document.querySelector('#upload-cancel');

const onPopupEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
    uploadFile.value ='';
  }
};

function openModal () {
  uploadOverlay.classList.remove('hidden');
  uploadOpen.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscapeKeyDown);
}

function closeModal () {
  uploadOverlay.classList.add('hidden');
  uploadOpen.classList.remove('modal-open');
}

uploadFile.addEventListener('change', () => {
  openModal();
});

uploadCancelButton.addEventListener('click', () => {
  closeModal();
});
