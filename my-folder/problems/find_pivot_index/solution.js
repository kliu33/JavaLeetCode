/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0
    nums.forEach(num => {
        sum+=num
    })
    let total = 0
    for(let i = 0; i < nums.length; i++) {
        if (i > 0) {
            total+=nums[i-1]
        }
        if (sum-nums[i]-total === total) {
            return i;
        }
    }
    return -1;
};