function validatePIN (pin) {
    //return true or false
    const pini = pin.split('')
    if(pini.length === 4 || pini.length ===6){
        return pin.split('').every(char => char >= '0' && char <= '9');
  
    }else{
      return false
    }
  }
  console.log(validatePIN('123456'))