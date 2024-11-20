function checkForFactor (base, factor) {
    if((base%factor)=== 0){
      return true
    }else if((base%factor)!== 0) {
      return false
    }
    
  }
  console.log(checkForFactor(10,2))