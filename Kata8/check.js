function hammingWeight(x) {
  let count = 0;
  while (x !== 0) {
    x = x & (x - 1); // Clear the least significant bit set
    count++;
  }
  return count;
}

console.log(hammingWeight(10)); // Output: 2
