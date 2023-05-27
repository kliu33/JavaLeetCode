/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0;
    let vowels = "aeiou"
    let i = left;
    while (i <= right){
        if (vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1])) count++
        i++
    }
    return count
};