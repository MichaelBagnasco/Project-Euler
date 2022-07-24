let sum = 0,
    a = 0,
    b = 1,
    c = 0;

while (b < 4000000) {
    c = a + b;
    a = b;
    b = c;

    if (b % 2 === 0) {
        sum += b;
    }
}

console.log(sum)
export {};