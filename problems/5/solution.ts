import { leastCommonMultiple } from "../../lib";

let lcm = 1;

for (let i = 2; i <= 20; i++) {
    lcm = leastCommonMultiple(i, lcm)
}

console.log(lcm)