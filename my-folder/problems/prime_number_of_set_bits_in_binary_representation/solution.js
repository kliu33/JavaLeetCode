/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const getNumOfSetBits = function(n) {
    let result = 0;
    while (n) {
        result += (n & 1);
        n = n >> 1;
    }
    return result;
}

const isPrime = function(n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i < n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

const primes = new Set([2, 3, 5, 7, 11]);

const countPrimeSetBits = function(L, R) {
    let count = 0;
    for (let n = L; n <= R; n++) {
        const bitNum = getNumOfSetBits(n);
        if (primes.has(bitNum)) {
            count++;
        } else if (isPrime(bitNum)) {
            count++;
            primes.add(bitNum);
        }
    }
    return count;
};