var textElement = document.querySelector(".reg-textbox");
var addButton = document.querySelector(".addButton");
var plateNumberOne = document.querySelector(".reg-one");
var plateNumberTwo = document.querySelector(".reg-two");
var plateNumberThree = document.querySelector(".reg-three");

var regFactoryInstance = RegFactory();

function registrationNumbers(){
//  var towns = document.querySelector(".numbers");
//  var townSelected = town.options[towns.selected].text;

  var textboxValue = textElement.value;

  plateNumberOne.innerHTML = regFactoryInstance.regSelection(textboxValue);
}
addButton.addEventListener('click', registrationNumbers);
