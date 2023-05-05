/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let left_sum = []
    let right_sum = []
    let left = 0
    let right = 0
    for (let i = 0; i < nums.length; i++){
        left_sum.push(left)
        right_sum.unshift(right)
        right += nums[nums.length - 1 - i]
        left += nums[i]
    }
    let out = []
    for (let i = 0; i < nums.length; i++) {
        out.push(Math.abs(left_sum[i] - right_sum[i]))
    }
    return out
};