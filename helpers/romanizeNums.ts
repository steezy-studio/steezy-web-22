export function romanizeNums(n: number): string {
  const lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  } as const;

  let roman = "";

  for (const i in lookup) {
    const k = i as keyof typeof lookup;
    while (n >= lookup[k]) {
      roman += i;
      n -= lookup[k];
    }
  }
  return roman;
}
