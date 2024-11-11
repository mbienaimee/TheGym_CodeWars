function disemvowel(str) {
    vowels = ['a','i','u','e','o','O','I','U','A','E']
     let result=''
    let splitting =str.split('');
    for(let i=0;i<splitting.length;i++){
      if(!vowels.includes(splitting[i])){
        result +=splitting[i]  
      }
    }
  
    return result;
  }
  console.log(disemvowel('hiiiidhfduie'))