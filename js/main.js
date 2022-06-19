const NAMES = ['Кекс', 'Поль', 'Граф', 'Крос', 'Фокс', 'Глас', 'Рэкс', 'Макс'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTION = ['Я летаю', 'Я мечтаю', 'Я с друзьями', 'Я гуляю', 'Я пою', 'Я на работе', 'Я кушаю', 'Я праздную'];

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//function checkStringLength (string, length) {
//  return string.length <= length;
//};

const COUNT_OF_PHOTOS = 25;
const numbersIdPhotos = [];               // Делаем массив для уникальных ID
const makeIdArray = () => {
  for (let i = 1; i <= COUNT_OF_PHOTOS; i++) {
    numbersIdPhotos.push(i);
  }
  return numbersIdPhotos;
};
makeIdArray();
const getId = () => {            // получаем уникальные ID
  const numberIdPhoto = numbersIdPhotos[0];
  numbersIdPhotos.shift();
  numbersIdPhotos.push(numberIdPhoto);
  return numberIdPhoto;
};

const numbersI = [];               // Делаем массив для уникальных i в URL
const makeIArray = () => {
  for (let i = 1; i <= COUNT_OF_PHOTOS; i++) {
    numbersI.push(i);
  }
  return numbersI;
};
makeIArray();
const getI = () => {            // получаем уникальные i в URL
  const numberI = numbersI[0];
  numbersI.shift();
  numbersI.push(numberI);
  return numberI;
};

const numbersIdComments = [];               // Делаем массив для уникальных id Comments
const makeIdCommentsArray = () => {
  for (let i = 1; i <= COUNT_OF_PHOTOS * 4; i++) {
    numbersIdComments.push(i);
  }
  return numbersIdComments;
};
makeIdCommentsArray();
const getIdComments = () => {            // получаем уникальные id Comments
  const numberIdComment = numbersIdComments[0];
  numbersIdComments.shift();
  numbersIdComments.push(numberIdComment);
  return numberIdComment;
};

const makeComment = () =>       // создаем комментарий
  ({
    id: getIdComments(), // ID комментария
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    nik: getRandomArrayElement(NAMES)
  });

const makeComments = () => Array.from({length: getRandomPositiveInteger(1, 4)}, makeComment);

const makePhoto = () =>         // создаем объект
  ({
    id: getId(),
    url: `photos/${getI()}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: makeComments()
  });

const photosArray = Array.from({length: COUNT_OF_PHOTOS}, makePhoto);// формирую финальный массив

photosArray();

/* Мои функции ниже (сохраняю на всякий случай):
function getRandomNumber(number1, number2) {
  if (number1 < 0 || number2 < 0) {
    throw Error('Неверный диапазон');
  }
  if (number2 < number1) {
    return Math.floor(Math.random() * (number1 - number2 + 1)) + number2;
  }
  if (number2 === number1) {
    return number2;
  }
  return Math.floor(Math.random() * (number2 - number1 + 1)) + number1;
}

function checkStringLength(string, maxLength) {
  return string.length > maxLength;
}

getRandomNumber(345, 456);
checkStringLength('Привет, всем!', 140);
*/
