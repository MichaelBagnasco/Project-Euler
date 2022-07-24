export function segmentedSieve(low: number, high: number): number[] {
    let primes: number[] = [];
    let sieve = Array(high - low + 1);
    for (let i = 0; i < sieve.length; i++) {
        sieve[i] = true;
    }
    for (let i = 2; i * i <= high; i++) {
        if (sieve[i - low]) {
            for (let j = i * i; j <= high; j += i) {
                sieve[j - low] = false;
            }
        }
    }
    for (let i = low; i <= high; i++) {
        if (sieve[i - low]) {
            primes.push(i);
        }
    }
    return primes;
}

export function simpleSieve(n: number): number[] {
    let primes: number[] = []
    let isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return primes;
}