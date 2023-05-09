/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    for (let letter of alpha){
        if (!sentence.includes(letter)) return false
    }
    return true
};