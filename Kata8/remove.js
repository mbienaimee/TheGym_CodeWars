function removeEveryOther(arr) {
  //your code here
  const result = arr.filter((x, index) => {
    if (index % 2 === 0) {
      return x;
    }
  });
  return result;
}
