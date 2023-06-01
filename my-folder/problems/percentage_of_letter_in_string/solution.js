/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    return Math.floor((s.split('').filter(ele => ele === letter).length / s.length) * 100)
};