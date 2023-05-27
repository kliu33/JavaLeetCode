/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b) => a-b);
    let out = []
    for (let i = 0; i < nums.length; i++ ){
        if (nums[i] === target) {
            out.push(i)
        }
    }
    return out
};