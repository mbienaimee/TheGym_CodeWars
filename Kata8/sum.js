function sum (numbers) {
  
    let summation = numbers.reduce((a,b)=>{
     
         return a+b
      
     
    },0)
    return summation;
  }
  console.log(sum([]))