var textElement = document.querySelector(".reg-textbox");
var addButton = document.querySelector(".addButton");
var regList = document.querySelector(".reg-plate");

var regFactoryInstance = RegFactory();

var regNumbers = [];

function textValue(){
  let theTextValue = "Enter Reg Number!";
  let textElementValue = textElement.value;
  
  if(textElementValue.startsWith("CA") || textElementValue.startsWith("CJ") || textElementValue.startsWith("CAG") || textElementValue.startsWith("CL")){
    theTextValue = textElementValue;
  }
  regNumbers.push(theTextValue);
  appendRegNumbers(regNumbers);
}
addButton.addEventListener('click', textValue);

function appendRegNumbers(plates){

  for(var i = 0; i < plates.length; i++){
    let currentPlate = plates[i];
    let addingElement = document.createElement("li");

    addingElement.innerHTML = currentPlate;
    regList.appendChild(addingElement);
  }
}


