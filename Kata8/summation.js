function sumMix(x){
    const summation = x.reduce((a,b)=>{
      return Number(a)+Number(b)
    },0)
  return summation;
  }
  console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
  