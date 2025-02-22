function narcissistic(value) {
  // Code me to return true or false
  const vls = value.toString().split("");
  const length = vls.length;
  const mapping = vls
    .map((char) => {
      return Math.pow(parseInt(char), length);
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);
  if (value === mapping) {
    return true;
  } else {
    return false;
  }
}
console.log(narcissistic(153));
