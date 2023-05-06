/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let out = []
    for (let i = 0; i < nums.length; i++){
        out.push(nums[nums[i]])
    }
    return out
};