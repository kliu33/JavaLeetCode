/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let arr = [];
    nums.forEach(num => {
        sum += num;
        arr.push(sum);
    }
    )
    return arr
};