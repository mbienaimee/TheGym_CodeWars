function solve(a, b) {
  const arrA = a.split("");
  const arrB = b.split("");
  const mapA = arrA.filter((a) => {
    if (!arrB.includes(a)) {
      return a;
    }
  });
  const mapB = arrB.filter((b) => {
    if (!arrA.includes(b)) {
      return b;
    }
  });
  const result = [...mapA, ...mapB];
  return result.join("");
}
console.log(solve("xyab", "xzca"));
