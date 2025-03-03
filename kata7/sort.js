function descendingOrder(n) {
  const neww = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return +neww;
}
