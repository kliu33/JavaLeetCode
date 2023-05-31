/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let z = x ^ y
    let count = 0;
    while (z > 0){
        if (z % 2 === 1) count += 1
        z = Math.floor(z/2)
    }
    return count
};