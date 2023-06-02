/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count = 0;
    let words = text.split(' ')
    outer: for (let word of words) {
        for (let char of word) {
            if (brokenLetters.includes(char)) continue outer
        }
        count++
    }
    return count
};