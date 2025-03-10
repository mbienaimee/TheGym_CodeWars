function isAlt(word) {
  const vowels = "aeiou";
  return word.split("").every((char, index) => {
    if (index === 0) return true;
    const prevChar = word[index - 1];
    const isCurrentVowels = vowels.includes(char.toLowerCase());
    const isPrevVowels = vowels.includes(prevChar.toLowerCase());
    return isCurrentVowels !== isPrevVowels;
  });
}
