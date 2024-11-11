var number=function(array){
    let result =[]
    //your awesome code here
    for(let i=0; i<array.length;i++){
      result.push(`${i+1}:${array[i]}`)  
      
    }
    return result
      
      
  }
  console.log(number(["a", "b", "c"]));
  