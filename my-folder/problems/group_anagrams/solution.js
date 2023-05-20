/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let out = []
    outer: for (let str of strs) {
        for (let i = 0; i < out.length; i++) {
            if (out[i].length === 0 || anagram(str, out[i][0])){
                out[i].push(str)
                continue outer
            }
        }
        out.push([str])
    }
    return out
};

let anagram = function(word1, word2) {
    if (word1.length  != word2.length) return false
    let set = {}
    for (let i = 0; i < word1.length; i++) {
        if (word2.includes(word1[i])) {
            if (set[word1[i]]){
                set[word1[i]] += 1
            } else {
                set[word1[i]] = 1
            }
        } else {
            return false
        }
        if (set[word2[i]]) {
            set[word2[i]] -= 1
        } else {
            set[word2[i]] = -1
        }
    }
    return Object.values(set).filter(val => val === 0).length === Object.values(set).length
}