function reverseLetter(str) {
  //coding and coding..

  const alphebets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const string = str.toLowerCase();
  const array = string.split("");
  const char = array.filter((a) => {
    if (alphebets.includes(a)) {
      return a;
    }
  });
  const result = char.reverse().join("");
  return result;
}
console.log(reverseLetter("krishan!"));
