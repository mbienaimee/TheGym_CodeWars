function countArara(n) {
  if (n === 1) {
    return "anane";
  }
  if (n === 2) {
    return "adak";
  } else if (n % 2 === 0) {
    return "adak ".repeat(n / 2);
  } else {
    const num = n - 1;
    const res = "adak ".repeat(num / 2) + "anane";
    return res;
  }
}
