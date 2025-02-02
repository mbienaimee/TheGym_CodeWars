function getLastDigit(index) {
    if(index === 0) return 0
    if(index === 1) return 1
    if(index === 2) return 1

    let a =1
    let b =1
    for(let i = 3;i<=index;i++){
        const next = (a+b)%10
        a =b
        b = next
    }
    return b

}
console.log(getLastDigit(15))