export function countPositivesSumNegatives(input: number[] | null): number[] {
  //   throw new Error('The method or operation is not implemented.');
  if (!input || input.length === 0) {
    return [0, 0];
  }
  const arr: number[] = [];
  const positive = input.filter((a: number) => a > 0);
  const sumOfPositive = positive.length;

  const negative = input.filter((d: number) => d < 0);
  const sumOfNegative = negative.reduce((e: number, f: number): number => {
    return e + f;
  });
  return [sumOfPositive, sumOfNegative];
}
