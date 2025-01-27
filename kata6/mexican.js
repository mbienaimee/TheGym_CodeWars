
function wave(str){
    // Code here
    const text = str.length
    const arr =[]
  
    for(let i=0;i<text;i++){
      if(str[i] === ' '){
          continue
      }
      const wave = str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1)
      arr.push(wave)
    }
  return arr
  
    
  }
  console.log(wave('hello there'))