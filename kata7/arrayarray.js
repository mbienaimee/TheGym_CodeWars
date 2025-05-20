function explode(x) {
  const [a, b] = x;

  const isNumA = typeof a === "number";
  const isNumB = typeof b === "number";

  let score;

  if (isNumA && isNumB) {
    score = a + b;
  } else if (isNumA || isNumB) {
    score = isNumA ? a : b;
  } else {
    return "Void!";
  }

  // Return an array with 'score' number of [a, b]
  return Array(score).fill(x);
}

// Examples:
console.log(explode(["a", 3])); // [['a', 3], ['a', 3], ['a', 3]]
console.log(explode([2, 4])); // [[2, 4], [2, 4], [2, 4], [2, 4], [2, 4], [2, 4]]
console.log(explode(["a", "b"])); // 'Void!'
