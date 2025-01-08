function checkExam(array1, array2) {
    const result =array1.reduce((acc,answer,index)=>{
     const stanswer = array2[index]
     if(stanswer === ''){
       return acc+0
     }
     else if(answer ===stanswer ){
       return acc+4
     }
     else if(answer !==stanswer){
       return acc-1
     }
   },0)
    return Math.max(result, 0)
   
   }
   console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))