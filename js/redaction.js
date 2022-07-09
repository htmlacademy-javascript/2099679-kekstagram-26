const scaleSmallerButton = document.querySelector('.scale__control--smaller');
//const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__controll');

scaleSmallerButton.addEventListener('click', () => {
  let scaleValueString = scaleValue.value;
  let scaleValueNumber = scaleValueString.replace('%', '')/100;
  if (scaleValueNumber > 0.25) {
    scaleValueNumber -=0.25;
  } else {
    scaleValueNumber = 0.25;
  }
  scaleValueString = `${scaleValueNumber * 100  }%`;
});

