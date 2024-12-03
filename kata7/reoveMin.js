function removeSmallest(numbers) {
    if(numbers.length ===1){
      return []
    }
   let minIndex = numbers.indexOf(Math.min(...numbers))
   
  
  // console.log(minIndex)
  
  return numbers.filter((n,index)=>index!==minIndex)
  }
  console.log(removeSmallest([1,2,3,4,5]))
  
  