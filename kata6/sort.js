function sortArray(array) {
  const even = array.filter((char) => char % 2 === 0).sort((a, b) => b - a);
  const odd = array.filter((char) => char % 2 !== 0).sort((a, b) => a - b);
  return array.map((num) => (num % 2 !== 0 ? odd.shift() : even.shift()));
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));
