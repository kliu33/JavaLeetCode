/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let pointer = 0;
    let out = 0;
    for (let i = 0; i < word.length; i++){
        out += Math.min(Math.abs(pointer - alpha.indexOf(word[i])), 26 - Math.abs(pointer - alpha.indexOf(word[i])))
        pointer = alpha.indexOf(word[i])
        out++
    }
    return out
};