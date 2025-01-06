function smallEnough(a, limit){
    const result = a.every((val)=>{
        if(val <limit || val === limit){
            return true
        }else {
            return false
        }
    })
  return result
  
  }
  console.log(smallEnough([1,2,3],2))