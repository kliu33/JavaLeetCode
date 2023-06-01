/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    return nums.filter(num => num < 0).length > nums.filter(num => num > 0).length ? nums.filter(num => num < 0).length : nums.filter(num => num > 0).length
};