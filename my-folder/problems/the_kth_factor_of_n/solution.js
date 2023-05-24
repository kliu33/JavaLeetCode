/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let count = 0;
    let i = 1
    while(i <= n){
        if (n % i === 0) {
            count += 1
            if (count === k) return i
        }
        i++
    }
    return -1
};