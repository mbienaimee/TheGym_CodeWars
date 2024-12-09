function arithmetic(a, b, operator){
    //your code here!
    
    if(operator === 'add'){
      return Number(a)+Number(b)
    }
    
    else if(operator === 'subtract'){
     return Number(a)-Number(b)
    }
    
    else if(operator === 'multiply'){
      return Number(a)*Number(b)
    }
    
    else if(operator === 'divide'){
     return Number(a)/Number(b)   
    }
    
    else{
      return `pleasee insert  `
    }
  }
  console.log(arithmetic(5,2,'multiply'))