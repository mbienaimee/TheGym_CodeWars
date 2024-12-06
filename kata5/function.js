function zero(m) {
    if(m === undefined){
        return 0
    }else{
        m.push(0)
       
        // return
        if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
         return m[2]-m[0]
        }
        else if(m[1] === '/'){
              return Math.floor(m[2]/m[0]) 
        }
       else if(m[1] === '*'){
              return m[2]*m[0]
        }
      
    }
}
function one(m) {
    if(m === undefined){
        return 1
    }else{
        m.push(1)
       
        // return
        if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
         return m[2]-m[0]
        }
        else if(m[1] === '/'){
              return Math.floor(m[2]/m[0]) 
        }
       else if(m[1] === '*'){
              return m[2]*m[0]
        }
      
    }
}

function two(m){
    if(m === undefined){
        return 2
    }else{
        m.push(2)
            if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
              return m[2]-m[0]
        }
        else if(m[1] === '/'){
        return Math.floor(m[2]/m[0])        
        }
       else if(m[1] === '*'){
             return  m[2]*m[0] 
        }
    }
    
}
function three(m) {
      if(m === undefined){
        return 3
    }else{
        m.push(3)
            if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
              return m[2]-m[0]
        }
        else if(m[1] === '/'){
              return Math.floor(m[2]/m[0]) 
        }
              else if(m[1] === '*'){
              return m[0]*m[2]
        }
    } 
}
function four(m) {
      if(m === undefined){
        return 4
    }else{
        m.push(4)
            if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
              return m[2]-m[0]
        }
        else if(m[1] === '/'){
             return  Math.floor(m[2]/m[0]) 
        }
             else if(m[1] === '*'){
              return m[0]*m[2]
        }
    } 
}
function five(m) {
      if(m === undefined){
        return 5
    }else{
        m.push(5)
            if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
              return m[2]-m[0]
        }
        else if(m[1] === '/'){
         return Math.floor(m[2]/m[0]) 
        }
             else if(m[1] === '*'){
              return m[0]*m[2]
        }
    } 
}
function six(m) {
      if(m === undefined){
        return 6
    }else{
        m.push(6)
            if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
              return m[2]-m[0]
        }
        else if(m[1] === '/'){
        return Math.floor(m[2]/m[0]) 
        }
             else if(m[1] === '*'){
              return m[0]*m[2]
        }
    } 
}
function seven(m) {
      if(m === undefined){
        return 7
    }else{
        m.push(7)
            if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
              return m[2]-m[0]
        }
        else if(m[1] === '/'){
              return Math.floor(m[2]/m[0])  
        }       else if(m[1] === '*'){
              return m[0]*m[2]
        }
    } 
}
function eight(m) {
      if(m === undefined){
        return 8
    }else{
        m.push(8)
            if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
              return m[2]-m[0]
        }
        else if(m[1] === '/'){
             return  Math.floor(m[2]/m[0])  
        }
             else if(m[1] === '*'){
              return m[0]*m[2]
        }
    } 
}
function nine(m) {
      if(m === undefined){
        return 9
    }else{
        m.push(9)
            if(m[1] === '+'){
            return m[0]+m[2]
        }else if(m[1] === '-'){
            return m[2]-m[0]
        }
        else if(m[1] === '/'){
              return Math.floor(m[2]/m[0]) 
        }
             else if(m[1] === '*'){
              return m[0]*m[2]
        }
    } 
}

function plus(n) {
    return [n, '+']
}

function minus(n) {
    return [n, '-']
}
function times(n) {
    return [n,'*']
    
}
function dividedBy(n) {
   return [n,'/']
}
// console.log(two(plus(one())))
// console.log(seven(times(five())))
// console.log(eight(minus(three())))
// console.log(six(dividedBy(two())))
// console.log(six(dividedBy(two())))
console.log(one(dividedBy(four())))