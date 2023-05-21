/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if (!word.includes(ch)) return word
    let idx = word.indexOf(ch)
    console.log(word.slice(0,idx+1).split('').reverse().join(''))
    return word.slice(0,idx+1).split('').reverse().join('').concat(word.slice(idx+1, word.length))
};