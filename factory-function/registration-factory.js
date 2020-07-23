function RegFactory(){
  var registrationNumbers = [];

  function regSelection(selectReg){
  		if(selectReg.startsWith("CA ") || selectReg.startsWith("CL ") || selectReg.startsWith("CJ ") || selectReg.startsWith("CAG ")){
      	return selectReg;
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
  				return regFilter;
  			}
  		}
  	}
  


  return {
    regSelection,
    //appendRegNums,
    filter
  }
}
