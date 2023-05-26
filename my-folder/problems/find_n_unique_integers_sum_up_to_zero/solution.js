/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let out = []
    if (n % 2 === 1) {
        out.push(0)
        for (let i = 1; i < Math.floor(n/2) + 1; i++){
            out.push(i)
            out.push(i * -1)
        }
    } else {
        for (let i = 1; i < n/2 + 1; i++){
            out.push(i)
            out.push(i * -1)
        }
    }
    return out
};