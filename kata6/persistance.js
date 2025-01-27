function persistence(num) {
    let count = 0
     while(num>=10){
      num = String(num)
         .split('')
         .map((x)=>parseInt(x))
         .reduce((a,b)=>{
             return a*b
         },1)
       
     count ++
     }
     return count
 }
 console.log(persistence(39))
 
 