/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0;
    outer: for (let word of words) {
        for (let i = 0; i < word.length; i++){
            if (word[i] !== s[i]) continue outer
        }
        count++
    }
    return count
};