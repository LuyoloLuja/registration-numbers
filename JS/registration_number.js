var textElement = document.querySelector(".reg-textbox");
var addButton = document.querySelector(".addButton");
var regList = document.querySelector(".reg-plate");

var regFactoryInstance = RegFactory();

var regNumbers = [];
function appendRegNumbers(plates){
  regList.innerHTML = "";

  for(var i = 0; i < plates.length; i++){
    let currentPlate = plates[i];
    let addingElement = document.createElement("li");
    addingElement.innerHTML = currentPlate;
    regList.appendChild(addingElement);
  }
}

function textValue(){
  let theTextValue = "Registration Number";
  if(textElement.value){
    theTextValue = textElement.value;
  }
  regNumbers.push(theTextValue);
  appendRegNumbers(regNumbers);
}
addButton.addEventListener('click', textValue);
