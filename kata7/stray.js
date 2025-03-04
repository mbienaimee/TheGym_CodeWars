function stray(numbers) {
  const answer = numbers.filter((char) => {
    return numbers.indexOf(char) === numbers.lastIndexOf(char);
  });
  return answer[0];
}
