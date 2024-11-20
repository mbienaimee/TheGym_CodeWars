function tribonacci(signature,n){
    //your code here
    if(n ===0)return []
    
     if (n <= 3) return signature.slice(0, n);
  let result =0;
    for(let i=3;i<n;i++){
     result= signature[signature.length-1]+signature[signature.length-2]+signature[signature.length-3]
     signature.push(result)
    //   console.log(signature)
      result++
    }
    return signature
    
  }
  console.log(tribonacci([1,1,1],8))