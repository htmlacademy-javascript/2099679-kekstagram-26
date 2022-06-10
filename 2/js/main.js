let getRandomNumber = function (number1, number2) {
  if (number2 < number1) {
    return Math.floor(Math.random()*(number1 - number2 + 1)) + number2;
  }
  if (number2 === number1) {
    return number2;
  }
  return Math.floor(Math.random()*(number2 - number1 + 1)) + number1;
}

let checkStringLength = function (string, maxLength) {
  if (string.length > maxLength) {
    return true;
  }
  return false;
}
getRandomNumber(345, 456);
checkStringLength('Привет, всем!', 140);
