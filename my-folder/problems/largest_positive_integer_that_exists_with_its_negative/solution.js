/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a,b) => a-b)
    let i = nums.length - 1
    while (nums[i] > 0) {
        if (nums.includes(nums[i] * -1)) return nums[i]
        i--
    }
    return -1
};