var textElement = document.querySelector(".reg-textbox");
var addButton = document.querySelector(".addButton");
var plateNumberOne = document.querySelector(".reg-one");
var plateNumberTwo = document.querySelector(".reg-two");
var plateNumberThree = document.querySelector(".reg-three");

function registrationNumbers(){
  var plateNumbers = document.querySelector("input[name='numbers']:checked");

  var regNumber = "";
  if (plateNumbers) {
    regNumber = plateNumbers.value;
  }

  var textboxValue = textElement.value;

  if (textboxValue) {
    plateNumberOne.innerHTML === textboxValue;
  }
}
addButton.addEventListener('click', registrationNumbers);
