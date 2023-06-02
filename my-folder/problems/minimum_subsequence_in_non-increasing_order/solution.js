/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    if (nums.length === 1) return nums
    let sum = 0;
    let out = []
    nums.sort((a,b) => a-b)
    while (sum <= nums.reduce((a,b) => a + b, 0)) {
        let nu = nums.pop()
        out.push(nu)
        sum += nu
    }
    return out
};