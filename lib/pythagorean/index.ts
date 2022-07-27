export function generateTriplesBySum(sum: number): number[][] {
    let triples: number[][] = [];
    for(let n = 1; n < sum / 2; n++) {
        for(let m = n + 1; m < sum / 2; m++) {
            let a = Math.pow(m, 2) - Math.pow(n, 2),
                b = 2 * m * n,
                c = Math.pow(m, 2) + Math.pow(n, 2);
            if(a + b + c === sum) {
                triples.push([a, b, c]);
            }
        }
    }
    return triples;
}