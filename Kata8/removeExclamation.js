function removeExclamationMarks(s) {
    let splitting = s.split('')
    let result = '';
  for(let i=0;i<splitting.length;i++){
    if(splitting[i]!=='!'){
      result+=splitting[i]
    }
    
  }
    
    return result;
  }
  console.log(removeExclamationMarks('etrfd!!'))