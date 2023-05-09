/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let words = s.split(' ')
    let nums = words.filter(word => Number.isInteger(parseInt(word)))
    let last = 0;
    for (let num of nums) {
        if (parseInt(num) <= last) return false
        last = (parseInt(num))
    }
    return true
};