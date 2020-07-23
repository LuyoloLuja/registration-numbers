function RegFactory(){
  var registrationNumbers = [];

  function regSelection(selectReg){
  		if(selectReg.startsWith("CA ") || selectReg.startsWith("CL ") || selectReg.startsWith("CJ ") || selectReg.startsWith("CAG ")){
      	registrationNumbers.push(selectReg);
      	//registrationNumbers += selectReg;
    }
  }

  /*function appendRegNums(registrations){

  	for(var i = 0; i < registrations.length; i++){

  		var currentReg = registrations[i];
  		let addingElement = document.createElement("li");

  		addingElement.innerHTML = currentReg;
  	}
  }*/

  function filter(regPlates){
  	var regFilter = [];

  	for(var i = 0; i < registrationNumbers.length; i++){
  		var currentNumberPlate = registrationNumbers[i]
  			if(currentNumberPlate.startsWith(regPlates)){
  				regFilter.push(currentNumberPlate);
  			}
  		}
  		return regFilter;
  	}
  


  return {
    regSelection,
    //appendRegNums,
    filter
  }
}
