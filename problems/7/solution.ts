import { simpleSieve } from "../../lib";

let n = 10001;

const upperBound = n * Math.log(n) + n * Math.log(Math.log(n));
const lowerBound = n * Math.log(n) + n * (Math.log(Math.log(n))-1);

console.log(upperBound);
console.log(lowerBound);
console.log(simpleSieve(Math.floor(upperBound))[n - 1]);