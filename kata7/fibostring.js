function solve(n){
    //..
    if(n === 0) return `0`
    if(n === 1) return `01`
    if(n === 2) return `010`
        let a = '0'
        let b = '01'
        for(i=2;i<=n;i++){
            let next = b+a
            a = b
            b = next
        }
        return b
    
}
console.log(solve(7))
