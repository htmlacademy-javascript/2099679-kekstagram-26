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
