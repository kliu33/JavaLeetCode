/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b) => a-b)
    let largest = nums[nums.length-1]
    let smallest = nums[0]
    let i = smallest
    while (i > 1) {
        if (largest % i === 0 && smallest % i === 0) return i
        i--
    }
    return 1
};