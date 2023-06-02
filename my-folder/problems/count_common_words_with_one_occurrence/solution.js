/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count = 0
    let map1 = {}
    for (let word of words1){
        if (map1[word]) map1[word]++
        else map1[word] = 1
    }
    let map2 = {}
    for (let word of words2){
        if (map2[word]) map2[word]++
        else map2[word] = 1
    }
    let arr = []
    for (let key in map1){
        if (map1[key] === 1) arr.push(key)
    }
    let arr2 = []
    for (let key in map2){
        if (map2[key] === 1) arr2.push(key)
    }

    for (let word of arr) {
        if (arr2.includes(word)) count++
    }
    return count
};