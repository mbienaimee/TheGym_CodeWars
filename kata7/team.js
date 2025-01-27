function openOrSenior(data){
    const result = data.map((char,index)=>{
        if(char[0] >=55 && char[1]>7){
            return "Senior"
        }else{
            return "Open"
        }
    })
    return result
}
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))