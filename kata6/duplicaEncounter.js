function duplicateEncode(word){
    // ...
   word = word.toLowerCase();
  let result ='';
  for(let i=0;i<word.length;i++){
     let count = 0;
    for(let j=0;j<word.length;j++){
      if(word[i]===word[j]){
        count++
        
      }
    }
     if(count > 1){
            result += ")"
        }
        else{
            result += "("
        }
    
  }
    return result;
}
console.log(duplicateEncode("recede"))