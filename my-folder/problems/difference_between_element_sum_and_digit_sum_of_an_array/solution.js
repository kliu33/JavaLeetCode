/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let es = nums.reduce((acc, val) => acc + val, 0)
    let ds = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            ds += nums[i]
        } else {
            ds += digitSum(nums[i])
        }
    }
    return Math.abs(es - ds)
};

var digitSum = function(num) {
    let sum = 0;
    while (num !== 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}