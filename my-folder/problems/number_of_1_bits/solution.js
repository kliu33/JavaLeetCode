/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return (toBinary(n).filter(num => num === 1).length)
};


var toBinary = function(num){
    let bits = []
    for (let i = 0; i < 32; i++) {
        bits.unshift(num % 2)
        num = Math.floor(num / 2)
    }
    return bits
}