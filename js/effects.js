let element;
// Элемент_1, которому надо добавлять класс выбранного эффекта
const uploadPreview = document.querySelector('.img-upload__preview');
// Слайдер
const slider = document.querySelector('.img-upload__effect-level');
// Скрываем слайдер
slider.classList.add('hidden');
// Контейнер для хранения эффекта
let selectedEffectContainer = 'none';
// Родительский элемент всех кнопок radio
const effectsList = document.querySelector('.effects__list');
// функция для добавления Элементу_1 класса эффекта
function onFilterChange (evt) {
  uploadPreview.classList.remove(`effects__preview--${selectedEffectContainer}`);
  selectedEffectContainer = evt.target.getAttribute('Value');
  element = document.querySelector(`#${evt.target.id}`);
  uploadPreview.classList.add(`effects__preview--${selectedEffectContainer}`);
}
// вешаем обработчик события на родительский элемент всех input
effectsList.addEventListener('change', onFilterChange);
// функция сброса фильтра
const resetFilter = function () {
  uploadPreview.classList.remove(`effects__preview--${selectedEffectContainer}`);
  element.checked = false;
  document.querySelector('#effect-none').checked = true;
};

export {resetFilter};
