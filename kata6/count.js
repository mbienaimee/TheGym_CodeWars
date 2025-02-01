function duplicateCount(text){
    count =0
    const result = text.toLowerCase() .split('')
    const duplicate = result.reduce((obj,a)=>{
      if(obj[a]){
          obj[a]+=1
      }else{
          obj[a]=1
      }
      return obj
        
    },{})
  const enumuration = Object.values(duplicate)
  const mapp = enumuration.map((v)=>{
      if(v>1){
          count ++
      }
  })
  return count
  
  }
  console.log(duplicateCount('aA11'))