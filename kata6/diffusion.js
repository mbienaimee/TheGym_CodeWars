function arrayDiff(a, b) {
    return a.filter((n)=>!b.includes(n))
      
    }
    console.log(arrayDiff([1,2],[1]))