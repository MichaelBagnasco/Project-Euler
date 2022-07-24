export function trialDivision(n: number): Array<number> {
  const factors: Array<number> = [];
  let i = 2;
  while (n > 1) {
    if (n % i === 0) {
      factors.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return factors;
}
