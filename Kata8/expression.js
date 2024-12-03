function expressionMatter(a, b, c) {

    let r1 = a*(b+c)
    let r2 = a*b*c
    let r3 = a+b*c
    let r4 = (a+b)*c
    let r5 = a + b + c;
  
    return Math.max(r1,r2,r3,r4,r5)
  }
  console.log(expressionMatter(1,2,3))