/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let hash_map = {}
    for (let num of nums){
        if (hash_map[num]) {
            hash_map[num]++
        } else {
            hash_map[num] = 1
        }
    }
    let pairs = 0;
    let left = 0;
    for (let amt of Object.values(hash_map)){
        pairs += Math.floor(amt / 2)
        left += amt % 2
    }
    return [pairs, left]
};