var uniqueInOrder = function (iterable) {
    let z = [];
     const splitting =typeof iterable === 'string' ? iterable.split('') : iterable;
    //your code here - remember iterable can be a string or an array
  //   const splitting = iterable.split("");
  
    for (let i = 0; i < splitting.length; i++) {
      if (splitting[i] !== splitting[i - 1]) {
        z.push(splitting[i]);
      }
    }
  
    return z;
  };
  console.log(uniqueInOrder("ABBCcAD"));
  