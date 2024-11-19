function order(words){
    // ...
    let result = []
    let numbers =[1,2,3,4,5,6,7,8,9]
    let splitting = words.split(' ')
    for(let num=0;num<numbers.length;num++){
        for(let i=0;i<splitting.length;i++)
        if(splitting[i].includes(numbers[num])){
            result.push(splitting[i])
         

        }
       
    }
    // console.log(splitting)
    
    return result.join(' ');
  }
  console.log(order("is2 Thi1s T4est 3a"))