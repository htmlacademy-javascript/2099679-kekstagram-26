import './photos.js';
import { resetScale } from './redaction.js';
import { resetFilter } from './effects.js';
import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadOpen = document.querySelector('body');
const uploadCancelButton = document.querySelector('#upload-cancel');
const uploadComment = document.querySelector('.text__description');
const uploadHashtag = document.querySelector('.text__hashtags');

function onPopupEscapeKeyDown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  uploadOpen.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscapeKeyDown);
};

function closeModal () {
  uploadOverlay.classList.add('hidden');
  uploadOpen.classList.remove('modal-open');
  uploadFile.value ='';
  resetScale();
  resetFilter();
  uploadComment.value = '';
  uploadHashtag.value = '';
  document.removeEventListener('keydown', onPopupEscapeKeyDown);
}

function closeModalWithError () {
  uploadOverlay.classList.add('hidden');
  uploadOpen.classList.remove('modal-open');
  uploadFile.value ='';
  document.removeEventListener('keydown', onPopupEscapeKeyDown);
}

uploadFile.addEventListener('change', () => {
  openModal();
});

uploadCancelButton.addEventListener('click', () => {
  closeModal();
});

export{ openModal, closeModal, closeModalWithError};
