
function friend(friends){
    //your code here
    const result = friends.map((char)=>{
      if(char.length === 4){
        return char
      }
    }).filter((n)=>n !== undefined)
    
  return result
  
    
  }
  console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))