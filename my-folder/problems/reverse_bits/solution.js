/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    return toDec(toBinary(n))
};

var toBinary = function(num){
    let bits = []
    for (let i = 0; i < 32; i++) {
        bits.unshift(num % 2)
        num = Math.floor(num / 2)
    }
    return bits
}

var toDec = function(arr){
    let out = 0;
    for (let i = 0; i < 32; i++) {
        out += arr[i] * Math.pow(2,i)
    }
    return out
}