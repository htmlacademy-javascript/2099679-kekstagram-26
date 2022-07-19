const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');
const SCALE_VALUE_MIN = 0.25;
const SCALE_VALUE_MAX = 1;
const SCALE_VALUE_STEP = 0.25;

scaleSmallerButton.addEventListener('click', () => {
  const scaleValueString = scaleValue.getAttribute('value');
  let scaleValueNumber = scaleValueString.replace('%', '')/100;
  if (scaleValueNumber > SCALE_VALUE_MIN) {
    scaleValueNumber -= SCALE_VALUE_STEP;
  } else {
    scaleValueNumber = SCALE_VALUE_MIN;
  }
  scaleValue.setAttribute('value', `${scaleValueNumber * 100  }%`);
  uploadPreview.style.transform = `scale(${scaleValueNumber})`;
});

scaleBiggerButton.addEventListener('click', () => {
  const scaleValueString = scaleValue.getAttribute('value');
  let scaleValueNumber = scaleValueString.replace('%', '')/100;
  if (scaleValueNumber < SCALE_VALUE_MAX) {
    scaleValueNumber += SCALE_VALUE_STEP;
  } else {
    scaleValueNumber = SCALE_VALUE_MAX;
  }
  scaleValue.setAttribute('value', `${scaleValueNumber * 100  }%`);
  uploadPreview.style.transform = `scale(${scaleValueNumber})`;
});

const resetScale = function () {
  const scaleValueString = scaleValue.getAttribute('value');
  let scaleValueNumber = scaleValueString.replace('%', '')/100;
  if (scaleValueNumber !== 1) {
    scaleValueNumber = 1;
  }
  scaleValue.setAttribute('value', `${scaleValueNumber * 100  }%`);
  uploadPreview.style.transform = `scale(${scaleValueNumber})`;
};

export {resetScale};
