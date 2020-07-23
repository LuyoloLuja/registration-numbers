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

  function filter(){
  	var regFilter = []
  }


  return {
    regSelection,
    //appendRegNums
  }
}
