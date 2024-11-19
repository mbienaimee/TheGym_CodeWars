function highAndLow(numbers){
    
    let num=[]
    let splitting =numbers.split(' ')
    for(let i=0;i<splitting.length;i++){
        num.push(Number(splitting[i]))
    }
    // console.log(splitting)
    // return num
    let maxx = Math.max(...num)
    let minn = Math.min(...num)
    // console.log(num)
    return `${maxx} ${minn}`

  }
  console.log(highAndLow("1 2 -3 4 5"))