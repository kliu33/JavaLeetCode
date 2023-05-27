/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let hash_map = {}
    for (let num of nums){
        if (hash_map[num]){
            hash_map[num] += 1
        } else {
            hash_map[num] = 1
        }
    }
    return Object.keys(hash_map).filter(key => hash_map[key] === 1).reduce((a,b) => parseInt(a)+parseInt(b),0)
};