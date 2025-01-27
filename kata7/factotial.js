function factorial(n)
{
 return Array.from({length:n},(_,i)=>{
    return i+1
  }).reduce((a,b)=>{
    return a*b
  },1)
}
console.log(factorial(6))