/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let out = []
    
    nums.reduceRight((prev, acc, i) => {
        out[i] = prev
        return prev * acc
    }, 1)
    
    nums.reduce((prev, acc, i) => {
        out[i] *= prev
        return prev * acc
    }, 1)
    
    return out
};