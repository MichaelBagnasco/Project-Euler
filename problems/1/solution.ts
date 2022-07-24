
let sum = 0;

for (let i = 1; i < 1000; i++) {
    if (!(i % 5 && i % 3)) {
        console.log(i)
        sum += i;
    }
}

console.log(sum)

export { };