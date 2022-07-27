import { simpleSieve } from "../../lib";

console.log(simpleSieve(2000000).reduce((acc, curr) => acc + curr, 0));