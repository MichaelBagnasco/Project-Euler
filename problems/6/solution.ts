let length = 100;

let arr = Array(length);

for (let i = 0; i < length; i++) {
    arr[i] = i + 1;
}

console.log(squareOfSums(arr) - sumOfSquares(arr));



export function sumOfSquares(arr: number[]): number {
  return arr.reduce((acc, curr) => acc + curr * curr, 0);
}

export function squareOfSums(arr: number[]): number {
  return Math.pow(
    arr.reduce((acc, curr) => acc + curr, 0),
    2
  );
}

