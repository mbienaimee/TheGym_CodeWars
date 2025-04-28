var greet = function (name) {
  const real = [...name];
  const real1 = real[0].toUpperCase() + real.slice(1).join("");
  const result = `Hello ${real1}!`;
  return result;
};
console.log(greet("reine"));
