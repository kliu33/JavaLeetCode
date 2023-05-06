/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(num => nums.filter(num1 => num1 < num).length)
};