const fibonacci = n => {
    //base code
    
    if(n<=1) return n
    //recursive
    return fibonacci(n-1) + fibonacci(n-2)
  };
  console.log(fibonacci(2))