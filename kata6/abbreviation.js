function abbreviate(string) {
  return string.replace(/[a-zA-Z]{4,}/g, (word) => {
    return word[0] + (word.length - 2) + word[word.length - 1];
  });
}
