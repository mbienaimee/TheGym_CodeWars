function problem(x){
    //your code here
   if(typeof x !== 'number'){
      return 'Error'
   }else{
     return (x*50)+6
   }
   
  }
  console.log(problem(6))