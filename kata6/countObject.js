function count(string) {
  const str = string.split("");
  const result = str.reduce((obj, char) => {
    if (obj[char]) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
    return obj;
  }, {});
  return result;
}
console.log(count("aba"));
