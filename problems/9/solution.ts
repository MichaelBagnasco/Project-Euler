import { generateTriplesBySum } from "../../lib/pythagorean";

const tripleProduct = generateTriplesBySum(1000)[0].reduce((acc, curr) => acc * curr, 1);

console.log(tripleProduct)

