function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return '';
    }
 
    const mapp = strarr.map((_,index)=>{
        return strarr.slice(index,index+k).join('')
    })
    const high = mapp.reduce((long,char)=>{
        if(char.length>long.length){
            return char
        }else{
           return  long
        } 
    },'')
    return high
 }
 console.log(longestConsec( ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2))