function reverseWords(str) {
    let result=str.split(' ')
 let revess = result.map((char)=>{
 return (char.split('').reverse().join(''))
})
return (revess.join(' '))
}
console.log(reverseWords("This is an example!"))