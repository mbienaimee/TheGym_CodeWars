function getCount(str) {
    let vowels =['a','e','i','o','u']
    let splitting = str.split('')
    let count=0;
    
    for(let i=0;i<splitting.length;i++){
      if(vowels.includes(splitting[i])){
        count++
      }
    }
      return count;
    }