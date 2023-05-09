/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let change = false
    let last = 'a'
    for (let char of s) {
        if (change && char === 'a') {
            return false
        }
        if (char !== last) {
            change = true
        }
    }
    return true
};