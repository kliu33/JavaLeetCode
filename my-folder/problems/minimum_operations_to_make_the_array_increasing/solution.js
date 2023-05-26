/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let prev = 0;
    let i = 0;
    let out = 0;
    while(i < nums.length){
        if (nums[i] <= prev) {
            out += (prev + 1) - nums[i]
            prev = nums[i] + (prev + 1) - nums[i]
        } else {
            prev = nums[i]
        }
        i++
    }
    return out
};