function filter_list(l) {
    // Return a new array with the strings filtered out
    let filtering =l.filter((a)=>{
      console.log(typeof a)
      return typeof a === "number"
       } )
    return filtering
    
  }
  console.log(filter_list([1,2,'a','b']))