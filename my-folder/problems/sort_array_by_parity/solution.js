/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return nums.filter(ele => ele % 2 === 0).concat(nums.filter(ele => ele % 2=== 1))
};