function tripledouble(num1, num2) {
    const str1 = num1.toString().split('')
    const str2 = num2.toString().split('')
    
   //  console.log(str1,str2)
    
    const count1 = str1.reduce((obj,char,i,arr)=>{
        if(arr[i] === arr[i+1] && arr[i] === arr[i+2]){
            obj[char] = 3
        }
        return obj
        
    },{})
    
    const count2 = str2.reduce((obj,char,i,arr)=>{
        if(arr[i] === arr[i+1]){
            obj[char] = 2
        }
        return obj
        
    },{})
    
    
    for (let digit in count1) {
           if (count1[digit] === 3 && count2[digit] === 2) {
               return 1;
           }
       }
       return 0
   
   }
   console.log(tripledouble(451999277, 41177722899))