function solve(s) {
  const splitting = s.split("");
  const countingUpp = splitting.reduce((count, x) => {
    if (x.toUpperCase() === x) {
      count += 1;
    }
    return count;
  }, 0);
  const countingLow = splitting.reduce((count, x) => {
    if (x.toLowerCase() === x) {
      count += 1;
    }
    return count;
  }, 0);
  if (countingLow > countingUpp) {
    return s.toLowerCase();
  } else if (countingLow < countingUpp) {
    return s.toUpperCase();
  } else if (countingLow === countingUpp) {
    return s.toLowerCase();
  }
}
console.log(solve("coDe"));
