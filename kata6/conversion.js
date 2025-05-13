function toCamelCase(s, n) {
  //coding and coding..
  // First letter of each word should be capitalized  except for the first world
  const string = s.toLowerCase();
  const array = string.split(" ");
  if (n === 1) {
    return array
      .map((a, index) => {
        if (index === 0) {
          return a;
        }
        return a[0].toUpperCase() + a.slice(1, a.length);
      })
      .join("");
  } else if (n === 2) {
    //     camelCase 2: The last letter of each word should be capitalized.
    //               Except for the last word.

    // Example: "Hello world"  -->  "hellOworld"

    return array
      .map((b, index) => {
        if (index === array.length - 1) {
          return b;
        }
        return b.slice(0, b.length - 1) + b[b.length - 1].toUpperCase();
      })
      .join("");
  } else if (n === 3) {
    //     camelCase 3: The first and last letters of each word should be capitalized.
    //               Except for the first and lasts letter of sentence.

    // Example: "Hello world"  -->  "hellOWorld"

    const result = array
      .map((a, index) => {
        if (index === 0) {
          return a.slice(0, a.length - 1) + a[a.length - 1].toUpperCase();
        } else if (index === array.length - 1) {
          return (
            a[0].toUpperCase() +
            a.slice(1, a.length - 1) +
            a[a.length - 1].toLowerCase()
          );
        }
        return (
          a[0].toUpperCase() +
          a.slice(1, a.length - 1) +
          a[a.length - 1].toUpperCase()
        );
      })
      .join("");
    return result;
  }
}
console.log(toCamelCase("Hello world", 3));
