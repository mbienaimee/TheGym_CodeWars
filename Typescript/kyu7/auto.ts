export function automorphic(n: number): string {
  // your code here
  return (n * n).toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}
