/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let out = ""
    let shorter = word1.length < word2.length ? word1 : word2
    let longer = word1.length < word2.length ? word2 : word1
    let extra = longer.slice(shorter.length, longer.length)
    for (let i = 0; i < shorter.length; i++) {
        out += word1[i]
        out += word2[i]
    }
    out += extra
    return out
};