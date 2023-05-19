/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    return (Math.max(...nums) * k) + (Math.pow(k,2) - k)/2
};