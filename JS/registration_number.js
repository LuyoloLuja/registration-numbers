var textElement = document.querySelector(".reg-textbox");
var addButton = document.querySelector(".addButton");
var plateNumberOne = document.querySelector(".reg-one");
var plateNumberTwo = document.querySelector(".reg-two");
var plateNumberThree = document.querySelector(".reg-three");

function regNumbers(){

  var regNumber = textElement.value;
  if (regNumber) {
    plateNumberOne.innerHTML === regNumber;
  }
}
addButton.addEventListener('click', regNumbers);
