function RegFactory(){
  var registrationNumbers = [];

  function regSelection(selectReg){
	    if (!registrationNumbers.includes(selectReg)) {
	    	if(selectReg.startsWith("CA") || selectReg.startsWith("CJ") || selectReg.startsWith("CAG") || selectReg.startsWith("CL") && selectReg !== undefined){
	    	registrationNumbers.push(selectReg);
	    	// TO DO : should append the list function
	    }
    }
  }

  function appendRegNums(registrations){

  	for(var i = 0; i < registrations.length; i++){
  		domElement = "";	// should do this on my dom
  		
  		var currentReg = registrations[i];
  		var addElement = document.createElement("li");

  		addElement.innerHTML = currentReg; // should probably do this on my DOM
  		domElement.appendChild(addElement); //should also do this on my dom

  	}
  }


  return {
    regSelection,
    appendRegNums
  }
}
