/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    nums.sort((a,b) => a-b)
    let num = (nums[nums.length - 1] - k) - (nums[0] + k)
    if (num <= 0) {
        return 0
    } else {
        return num
    }
};