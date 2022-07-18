//import {createPhotoArray} from './data.js'; исключаем тестовые данные

const similarListElement = document.querySelector('.pictures');
const similarPhotoTemplate = document.querySelector('#picture').content;

//const similarPhotos = createPhotoArray(); исключаем тестовые данные
const renderSimilarList = (similarPhotos) => {
  const similarListFragment = document.createDocumentFragment();

  similarPhotos.forEach(({url, likes, comments}) => {
    const photoElement = similarPhotoTemplate.cloneNode(true);
    photoElement.querySelector('img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.appendChild(photoElement);
  });

  similarListElement.appendChild(similarListFragment);
};

export{renderSimilarList};
