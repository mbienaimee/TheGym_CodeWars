function toBcd(number){
    if(number < 0) return "-" + toBcd(-number)
 return String(number).split('')
        .map((num)=>{
            return parseInt(num,10).toString(2).padStart(4,'0')
        }).join(' ')
 }
 console.log(toBcd(10))