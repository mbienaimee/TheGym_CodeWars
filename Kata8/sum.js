function sum (numbers) {
  
    let summation = numbers.reduce((a,b)=>{
      if(numbers === []){
        return 0
      }
      else{
         return a+b
      }
     
    },0)
    return summation;
  }
  console.log(sum([]))