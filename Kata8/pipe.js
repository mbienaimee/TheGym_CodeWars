function pipeFix(numbers){
    let result = []
      const max= Math.max(...numbers)
       const min= Math.min(...numbers)
      
    for(let i =min;i<=max;i++){
        result.push(i)
    }
    return result
    }
    console.log(pipeFix([1,2,3,5,6,8,9]))