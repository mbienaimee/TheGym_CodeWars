const fact = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};
console.log(fact(5));
const fibb = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
};
console.log(fibb(4));
// prime number
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(5));

//recursive function
const fibrecursive = (n) => {
  if (n < 2) {
    return n;
  }
  return fibrecursive(n - 2) + fibrecursive(n - 1);
};
console.log(fibrecursive(4));

//factorial

const factrec = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factrec(n - 1);
};
console.log(factrec(5));
