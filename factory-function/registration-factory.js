function RegFactory(){
  var registrationNumbers = [];

  function regSelection(selectReg){
	    if (!registrationNumbers.includes(selectReg)) {
	    	if(selectReg.startsWith("CA") || selectReg.startsWith("CJ") || selectReg.startsWith("CAG") || selectReg.startsWith("CL") && selectReg !== undefined){
	    	registrationNumbers.push(selectReg);
	    }
    }
  }

  return {
    regSelection
  }
}
