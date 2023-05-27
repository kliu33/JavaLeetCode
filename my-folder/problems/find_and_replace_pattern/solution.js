/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let out = []
    outer: for (let word of words) {
        let map = {}
        for (let i = 0; i < pattern.length; i++){
            if (map[pattern[i]]) {
                if (map[pattern[i]] !== word[i]) {
                    continue outer
                }
            } else {
                map[pattern[i]] = word[i]
            }
        }
        if (uniqueArray(Object.values(map))) out.push(word)
    }
    return out
};

var uniqueArray = function(arr) {
    let seen = []
    for (let ele of arr) {
        if (seen.includes(ele)) return false
        else seen.push(ele)
    }
    return true
}