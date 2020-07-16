var textElement = document.querySelector(".reg-textbox");
var addButton = document.querySelector(".addButton");
var regList = document.querySelector(".regList");

var regFactoryInstance = RegFactory();

var regNumbers = [];
function appendRegNumbers(plates){
  regList.innerHTML = "";
  for(var i = 0; i < plates.length; i++){
    let currentPlate = plates[i];
    let addingElement = document.createElement("li");
    regList.appendChild(addingElement);
  }
}
addButton.addEventListener('click', );
