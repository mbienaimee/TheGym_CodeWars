function isPangram(string){
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const text = string.toLowerCase().split('')
    const filtered = text.filter((c)=>c>='a' && c<='z')
    const duplicate = filtered.reduce((arr,x)=>{
        if(!arr.includes(x)){
            arr.push(x)
        }
        return arr
        
    },[])
    if(duplicate.length === alphabet.length){
        return true
    }else{
        return false
    }

}
console.log(isPangram('This is not a pangram.'))