function SeriesSum(n) {
  let result = 0;
  let prev = 1;
  for (let num = 0; num < n; num++) {
    console.log(`1/${prev}`);
    result += 1 / prev;
    prev += 3;
  }
  return result.toFixed(2);
}
console.log(SeriesSum(2));
