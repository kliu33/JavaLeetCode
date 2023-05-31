/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let hash_map = {}
    for (let char of s){
        if (hash_map[char]) return char
        else hash_map[char] = true
    }
};