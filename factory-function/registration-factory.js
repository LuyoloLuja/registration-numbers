function RegFactory(){
  var regNumbers = [];

  function regSelection(selectReg){
    if(selectReg.startsWith("CA") || selectReg.startsWith("CJ") || selectReg.startsWith("CAG") || selectReg.startsWith("CL") && selectReg !== undefined){
      return selectReg;
    }
  }

  return {
    regSelection
  }
}
