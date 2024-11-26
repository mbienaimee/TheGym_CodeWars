function findOdd(A) { 
    return A.find(num => A.filter(x => x === num).length % 2 !== 0);
}
console.log(findOdd([7]))