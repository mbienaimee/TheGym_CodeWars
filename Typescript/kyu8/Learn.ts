export var var1Boolean: boolean = true;
// TODO:
export var var2Decimal: number = 13;
export var var3Hex: number = 0xf00d;
export var var4Binary: number = 0b111111;
export var var5Octal: number = 0o744;
export var var6String: string = "Hello, world!";
export var var8NumericArray: number[] = [1, 2, 3, 4, 5];
export const var7Array: (number | string | { a: number })[] = [
  1,
  "test",
  { a: 3 },
  4,
  5,
];
// Tuple
export const var9Tuple: [string, number] = ["key", 12345];

// Enums
export enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
export const var10Enum = Color.Blue;
//Any
export var var11ArrayOfAny: any[] = [1, "test", { a: 3 }, 4, 5];
//void
export var var12VoidFunction = (): void => {
  console.log("hello");
};
//Null and undefined
export var var13Null: null = null;
export var var14Undefined: undefined;
//never
export function var15NeverFunction(): never {
  throw new Error("This function never returns.");
}
