/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let hash_map = {}
    for (let num of nums) {
        if (hash_map[num]) {
            hash_map[num] += 1
        } else {
            hash_map[num] = 1
        }
    }
    return Object.values(hash_map).filter(ele => ele % 2 === 1).length === 0
};