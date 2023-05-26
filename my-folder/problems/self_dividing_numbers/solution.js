/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let out = [];
    for (let i = left; i <= right; i++) {
        if (selfDividing(i)) out.push(i)
    }
    return out
};

var selfDividing = function(num) {
    let temp = num;
    let digits = [];
    while(num > 0) {
        digits.push(num % 10)
        num = Math.floor(num / 10)
    }
    for (let digit of digits){
        if (temp % digit !== 0) return false
    }
    return true
}