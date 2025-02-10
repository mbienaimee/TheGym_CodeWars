function roundToNext5(n){
    //if the remainder is 0 return the number
      
      if(n%5 === 0) return n
      else if(n>0 && n%5 !==0){
        return n+(5-Math.abs(n%5))
      }
      else if(n<0 && n%5 !== 0){
        return (Math.floor(n / -5) * -5);
      }
    }
    console.log(roundToNext5(2))