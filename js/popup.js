import {photosArray} from './data.js';

const similarListElement = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content;

const similarPhotos = photosArray;
const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, likes, comments}) => {
  const photoElement = similarPhotoTemplate.cloneNode(true);
  photoElement.querySelector('img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(photoElement);
});

similarListElement.appendChild(similarListFragment);
