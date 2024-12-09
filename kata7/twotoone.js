function longest(s1, s2) {
    const a = "xyaabbbccccdefww"
    const b = "xxxxyyyyabklmopq"
    const l1 = s1.split('').sort().reduce((arr,char)=>{
        if(!arr.includes(char)){
            arr.push(char)
        }
        return arr
    },[])
    const l2 = s2.split('').sort().reduce((arr,char)=>{
        if(!arr.includes(char)){
            arr.push(char)
        }
        return arr
        
    },[])
    const merging = l1.concat(l2)
    return merging.sort().reduce((arr,chara)=>{
        if(!arr.includes(chara)){
            arr.push(chara)
        }
        return arr
        
    },[]).join('') 
  }
  console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))
  
  