import {showAlert} from './util.js';
import {openSuccessMessage, openErrorMessage} from './success-error-messages.js';

const getData = (onSuccess) => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (!response.ok) {
        showAlert('Загрузка не удалась. Обновите страницу.');
      } else {
        return response;
      }
    })
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch(() => {
      showAlert('Загрузка не удалась. Обновите страницу.');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        openSuccessMessage();
      } else {
        onFail();
        openErrorMessage();
      }
    })
    .catch(() => {
      onFail();
      openErrorMessage();
    });
};

export {getData, sendData};
