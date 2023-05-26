/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    if (nums.length === 1) return nums
    let out = []
    for (let i = 0; i < nums.length-1 ;i++){
        out.push((nums[i] + nums[i+1]) % 10)
    }
    return triangularSum(out)
};