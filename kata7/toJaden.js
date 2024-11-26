String.prototype.toJadenCase = function () {
    return this.split(' ')
               .map((char)=>{
                  return char.charAt(0).toUpperCase()+char.slice(1)
               })
               .join(' ')
                
    };
    console.log("How can mirrors be real if our eyes aren't real".toJadenCase())