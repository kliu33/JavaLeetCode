/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let out = 0;
    let nums = n.toString().split('').map(ele => parseInt(ele))
    for (let i = 0; i < nums.length; i++){
        if (i % 2 === 0) out += nums[i]
        else out -= nums[i]
    }
    return out
};