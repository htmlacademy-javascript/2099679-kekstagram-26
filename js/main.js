import './photos.js';
import './redaction.js';
import './effects.js';
import {onModalClose} from './form-open-close.js';
import {renderSimilarList} from './photos.js';
import {setUserFormSubmit} from './form-send.js';
import {getData} from './data-get-send.js';

getData((photos) => {
  renderSimilarList(photos);
});

setUserFormSubmit(onModalClose);
