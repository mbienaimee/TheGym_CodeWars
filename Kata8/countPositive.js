function countPositivesSumNegatives(input) {
  
    let count =0
    let sum =0
     if (!input || input.length === 0) {
      return [];
    }
    for (let i=0;i<input.length;i++){
      if(input[i]>0){
        count++;
      }
      else{
        sum +=input[i]
      }
      
    }
    return [count,sum]
    // your code here
  }
  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))