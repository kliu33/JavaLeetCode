/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let words = s.split(' ')
    let out = new Array(words.length-1)
    for (let word of words) {
        out[word.slice(-1) - 1] = word.slice(0,-1)
    }
    return out.join(' ')
};