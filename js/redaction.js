const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview');

scaleSmallerButton.addEventListener('click', () => {
  let scaleValueString = scaleValue.getAttribute('value');
  let scaleValueNumber = scaleValueString.replace('%', '')/100;
  if (scaleValueNumber > 0.25) {
    scaleValueNumber -= 0.25;
  } else {
    scaleValueNumber = 0.25;
  }
  scaleValueString = scaleValue.setAttribute('value', `${scaleValueNumber * 100  }%`);
  uploadPreview.style.transform = `scale(${scaleValueNumber})`;
});

scaleBiggerButton.addEventListener('click', () => {
  let scaleValueString = scaleValue.getAttribute('value');
  let scaleValueNumber = scaleValueString.replace('%', '')/100;
  if (scaleValueNumber < 1) {
    scaleValueNumber += 0.25;
  } else {
    scaleValueNumber = 1;
  }
  scaleValueString = scaleValue.setAttribute('value', `${scaleValueNumber * 100  }%`);
  uploadPreview.style.transform = `scale(${scaleValueNumber})`;
});

const resetScale = function () {
  let scaleValueString = scaleValue.getAttribute('value');
  let scaleValueNumber = scaleValueString.replace('%', '')/100;
  if (scaleValueNumber !== 1) {
    scaleValueNumber = 1;
  }
  scaleValueString = scaleValue.setAttribute('value', `${scaleValueNumber * 100  }%`);
  uploadPreview.style.transform = `scale(${scaleValueNumber})`;
};

export {resetScale};
