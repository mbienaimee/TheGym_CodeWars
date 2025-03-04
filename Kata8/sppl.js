function noBoringZeros(n) {
  // your code
  const sppl = n.toString().split("");
  if (n === "0") return 0;
  while (sppl[sppl.length - 1] === "0") {
    sppl.pop();
  }

  return +sppl.join("");
}
console.log(noBoringZeros(4500));
