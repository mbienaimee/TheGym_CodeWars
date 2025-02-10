function findUniq(arr) {
    // do magic
    
    const results = arr.reduce((obj,char)=>{
        if(obj[char]){
             obj[char] += 1
        }else{
             obj[char] = 1
        }
        return obj
    },{})
  
    for(char in results){
        if(results[char] === 1){
            return +char
        }
    }
   
  }
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
  