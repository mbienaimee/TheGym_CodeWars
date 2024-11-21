function isPalindrome(x) {
    // your code here
    x=x.toLowerCase()
    let revers = x.split('')
    
    let str =revers.reverse()
    let joining =str.join('')
     if(joining ===x) {
       return true
     } else{
       return false
     }
  }
  console.log(isPalindrome("madam"))