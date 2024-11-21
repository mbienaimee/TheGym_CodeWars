function oddOrEven(array) {
    //enter code here
   let sum = array.reduce((a,b)=>{
     return a+b
   },0)
   if(sum%2===0){
   return "even"
 }
 else{
   return "odd"
 }
 }
 
 
 console.log(oddOrEven([0, 1, 4]))