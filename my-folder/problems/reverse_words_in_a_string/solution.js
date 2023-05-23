/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ').reverse()
    words = words.filter(ele => ele !== '')
    return words.join(' ')
};