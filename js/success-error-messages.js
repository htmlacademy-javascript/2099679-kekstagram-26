import {isEscapeKey} from './util.js';

const successUploadMessageTemplate = document.querySelector('#success').content;
const bodyElement = document.querySelector('body');
const errorUploadMessageTemplate = document.querySelector('#error').content;

const onEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const onWindowClick = (evt) => {
  if (!evt.target.closest('div')) {
    closeSuccessMessage();
    window.removeEventListener('click', onWindowClick);
  }
};

const openSuccessMessage = () => {
  const successMessageElement = successUploadMessageTemplate.cloneNode(true);
  bodyElement.append(successMessageElement);

  document.addEventListener('keydown', onEscapeKeyDown);
  const closeMessageButton = document.querySelector('.success__button');
  closeMessageButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('click', onWindowClick);
};

function closeSuccessMessage () {
  const successMessage = document.querySelector('.success');
  successMessage.remove();

  document.removeEventListener('keydown', onEscapeKeyDown);
}

const onErrorEscapeKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const onWindowClickError = (evt) => {
  if (!evt.target.closest('div')) {
    closeErrorMessage();
    window.removeEventListener('click', onWindowClickError);
  }
};

const openErrorMessage = () => {
  const errorMessageElement = errorUploadMessageTemplate.cloneNode(true);
  bodyElement.append(errorMessageElement);

  document.addEventListener('keydown', onErrorEscapeKeyDown);
  const closeMessageButton = document.querySelector('.error__button');
  closeMessageButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('click', onWindowClickError);
};

function closeErrorMessage () {
  const errorMessage = document.querySelector('.error');
  errorMessage.remove();

  document.removeEventListener('keydown', onErrorEscapeKeyDown);
}

export {openSuccessMessage, openErrorMessage};
