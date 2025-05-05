function solution(str) {
  const arr = str.split("");
  const empty = [];
  for (let i = 0; i < arr.length; i += 2) {
    const sol = arr[i] + (arr[i + 1] ? arr[i + 1] : "_");
    empty.push(sol);
  }
  return empty;
}
