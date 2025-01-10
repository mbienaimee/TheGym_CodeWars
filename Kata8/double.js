function doubleChar(str) {
    return str.split('').map((char)=>{
            return char.repeat(2)
        }).join('')
    }
    console.log(doubleChar("String"))