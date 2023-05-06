/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nums = n.toString().split('')
    let sum = 0
    let prod = 1
    for (let i = 0; i < nums.length; i++) {
        let num = parseInt(nums[i])
        sum += num;
        prod *= num;
    }
    return prod - sum
};