import {isEscapeKey} from './util.js';

const successUploadMessageTemplate = document.querySelector('#success').content;
const bodyElement = document.querySelector('body');
const errorUploadMessageTemplate = document.querySelector('#error').content;

const onEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onSuccessMessageClose();
  }
};

const onWindowClick = (evt) => {
  if (!evt.target.closest('div')) {
    onSuccessMessageClose();
    window.removeEventListener('click', onWindowClick);
  }
};

const openSuccessMessage = () => {
  const successMessageElement = successUploadMessageTemplate.cloneNode(true);
  bodyElement.append(successMessageElement);

  document.addEventListener('keydown', onEscapeKeyDown);
  const closeMessageButton = document.querySelector('.success__button');
  closeMessageButton.addEventListener('click', onSuccessMessageClose);
  document.addEventListener('click', onWindowClick);
};

function onSuccessMessageClose () {
  const successMessage = document.querySelector('.success');
  successMessage.remove();

  document.removeEventListener('keydown', onEscapeKeyDown);
}

const onErrorEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onErrorMessageClose();
  }
};

const onWindowClickError = (evt) => {
  if (!evt.target.closest('div')) {
    onErrorMessageClose();
    window.removeEventListener('click', onWindowClickError);
  }
};

const openErrorMessage = () => {
  const errorMessageElement = errorUploadMessageTemplate.cloneNode(true);
  bodyElement.append(errorMessageElement);

  document.addEventListener('keydown', onErrorEscapeKeyDown);
  const closeMessageButton = document.querySelector('.error__button');
  closeMessageButton.addEventListener('click', onErrorMessageClose);
  document.addEventListener('click', onWindowClickError);
};

function onErrorMessageClose () {
  const errorMessage = document.querySelector('.error');
  errorMessage.remove();

  document.removeEventListener('keydown', onErrorEscapeKeyDown);
}

export {openSuccessMessage, openErrorMessage};
