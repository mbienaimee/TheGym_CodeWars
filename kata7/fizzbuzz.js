var fibsFizzBuzz = function(n) {
    // Your code here.
  if(n <= 0)return []
  if(n === 1) return [1]
  if(n === 2) return [1,1]
  const nextseq = [1,1]
  
  
  for(let i =2;i<n;i++){
    const nextt = nextseq[i-1]+ nextseq[i-2]
    nextseq.push(nextt)
    
  }
  console.log(nextseq)
  
 const result = nextseq.map((char)=>{
     if(char%3 ===0 && char%5 ===0 ){
          return `FizzBuzz`
      }
      
     else if(char%3 === 0){
          return `Fizz`
      }
      else if(char%5 === 0){
          return `Buzz`
      }else {
          return char
      }
    
  })
  return result
  
}
console.log(fibsFizzBuzz(5))