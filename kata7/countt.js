function solution(fullText, searchText) {
  return [...fullText].reduce((count, _, index, arr) => {
    if (fullText.slice(index, index + searchText.length) === searchText) {
      count++;
      arr.splice(index + 1, searchText.length - 1);
    }
    return count;
  }, 0);
}

// the implementation
function solution(fullText, searchText) {
  const spt = fullText.split("");
  const result = spt.reduce((count, a) => {
    if (a === searchText) {
      count += 1;
    }
    return count;
  }, 0);
  return result;
}
console.log(solution("abcdeb", "b"));
