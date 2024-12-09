function invert(array) {
    if(array === []){
      return []
    }
     return array.map((n)=>-(n))
  }
  console.log(invert([1, 2, 3, 4, 5]))