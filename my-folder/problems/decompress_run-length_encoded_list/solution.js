/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    out = []
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < nums[i]; j++){
                out.push(nums[i+1])
            }
        }
    }
    return out
};