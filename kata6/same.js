function comp(array1, array2){
    if (!array1 || !array2 || array1.length !== array2.length) return false;
    const mapp = array1.map((n)=>{
      return n*n
    }).sort((a,b)=>a-b)
    const result = array2.sort((a,b)=>a-b)
    return mapp.every((val,index)=>val === result[index])
  }
  console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 36100, 25921, 361, 20736, 361]))