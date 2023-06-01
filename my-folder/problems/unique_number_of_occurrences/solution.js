/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hash_map = {}
    for (let num of arr){
        if (hash_map[num]) hash_map[num]++
        else hash_map[num] = 1
    }
    let set = new Set
    for (let count of Object.values(hash_map)){
        if (set.has(count)) return false
        else set.add(count)
    }
    return true
};