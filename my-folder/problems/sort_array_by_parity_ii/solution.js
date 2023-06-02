/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let out = []
    let odds = nums.filter(ele => ele % 2 === 1)
    let evens = nums.filter(ele => ele % 2 === 0)
    for (let i = 0; i < nums.length; i++){
        if (i % 2 === 0) out.push(evens[i/2])
        else out.push(odds[Math.floor(i/2)])
    }
    return out
};