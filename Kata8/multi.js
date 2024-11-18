function countBy(x, n) {
    let z = [];
  for(let i=1;i<=n;i++){
    console.log(i)
    z.push(Number(i*x))
  }
  
    return z;
  }
  console.log(countBy(2,3))