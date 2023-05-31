/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let hash_map = {}
    for (let num of nums){
        if (hash_map[num]) return num
        else hash_map[num] = true
    }
};