function replace(s) {
  const vowels = ["a", "i", "u", "e", "o", "A", "I", "O", "U", "E"];
  const result = s
    .split("")
    .map((char) => {
      if (vowels.includes(char)) {
        return "!";
      } else {
        return char;
      }
    })
    .join("");
  return result;
}
