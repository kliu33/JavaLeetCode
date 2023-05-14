/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let num1, num2, num3, num4 = 0
    num1 = Math.max(...nums)
    nums.splice(nums.indexOf(num1), 1)
    num2 = Math.max(...nums)
    nums.splice(nums.indexOf(num2), 1)
    num3 = Math.min(...nums)
    nums.splice(nums.indexOf(num3), 1)
    num4 = Math.min(...nums)
    return (num1*num2) - (num3*num4)
};  