function findMultiples(integer, limit) {
    let result =[]
    for(let i=1;i<=limit;i++){
        if(i%integer === 0 ){
        result.push(i)
        }
    }
    return result
  }
  console.log(findMultiples(2,6))
  