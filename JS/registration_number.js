var textElement = document.querySelector(".reg-textbox");
var addButton = document.querySelector(".addButton");
var regList = document.querySelector(".reg-plate");
var registration = document.querySelector(".drop-down");

//var regFactoryInstance = RegFactory();

var regNumbers = [];

function textValue(){
  let theTextValue = "";
  let textElementValue = textElement.value;

  theTextValue = textElementValue.toUpperCase().trim();
  
  if (theTextValue !== "" && regNumbers.length <= 14) {

    if (!regNumbers.includes(theTextValue)) {
      if(theTextValue.startsWith("CA ") || theTextValue.startsWith("CL ") || theTextValue.startsWith("CJ ") || theTextValue.startsWith("CAG ")){
        regNumbers.push(theTextValue);
        appendRegNumbers(regNumbers);
      }
    }  
  }
}
addButton.addEventListener('click', textValue);

function appendRegNumbers(plates){
  regList.innerHTML = "";

  for(var i = 0; i < plates.length; i++){
    let currentPlate = plates[i];
    let addingElement = document.createElement("li");

    addingElement.innerHTML = currentPlate;
    regList.appendChild(addingElement);
  }
}

function listFiltering(list, value){
  var selectedCity = registration.options[registration.selectedIndex].value;

  
}
