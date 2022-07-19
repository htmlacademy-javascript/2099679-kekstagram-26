import {sendData} from './data-get-send.js';
import {closeModalWithError} from './form-open-close.js';

const userForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуем...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';

};

const setUserFormSubmit = (closeModal) => {
  userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    const onSuccess = () => {
      closeModal();
      unblockSubmitButton();
    };
    const onFail = () => {
      closeModalWithError();
      unblockSubmitButton();
    };
    sendData(onSuccess, onFail, new FormData(evt.target),
    );
  });
};

export {setUserFormSubmit};
