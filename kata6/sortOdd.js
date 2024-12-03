function sortArray(array) {
    
    let sorr = array.filter((n)=> n%2!==0)
                    .sort((a,b)=>a-b)
    let result = array.map((n)=>n%2!==0?sorr.shift():n)
    return result
    // Return a sorted array.
  }
  console.log(sortArray([5, 8, 6, 3, 4] ))