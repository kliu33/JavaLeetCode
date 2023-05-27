/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let hash_map = {}
    for (let letter of s){
        if (hash_map[letter]) {
            hash_map[letter] += 1
        } else {
            hash_map[letter] = 1
        }
    }
    return Object.values(hash_map).filter(val => val === Object.values(hash_map)[0]).length === Object.values(hash_map).length
};