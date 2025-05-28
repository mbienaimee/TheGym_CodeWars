export const distinct = (a: number[]): number[] => {
  const dupplicate = a.reduce((arr: number[], b: number): number[] => {
    if (!arr.includes(b)) {
      arr.push(b);
    }
    return arr;
  }, []);
  return dupplicate;
};
