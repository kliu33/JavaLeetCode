/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    let hash_map1 = {}
    let hash_map2 = {}
    for (let char of word1){
        if (hash_map1[char]) hash_map1[char]++
        else hash_map1[char] = 1
    }
    for (let char of word2){
        if (hash_map2[char]) hash_map2[char]++
        else hash_map2[char] = 1
    }
    
    let arr =Object.values(hash_map2);
    for(let i in hash_map1){
        if(!hash_map2[i]) return false;
        let index = arr.indexOf(hash_map1[i])
        if(index ==-1) return false;
        arr.splice(index,1)
    }

    return arr.length == 0
};