import { trialDivision } from "../../lib/factorization";

const n = 600851475143;

const factors = trialDivision(n);

console.log(factors[factors.length - 1]);