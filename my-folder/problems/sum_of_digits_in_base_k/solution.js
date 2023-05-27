/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    let out = 0;
    while (n > 0) {
        out += n % k
        n = Math.floor(n / k)
    }
    return out
};