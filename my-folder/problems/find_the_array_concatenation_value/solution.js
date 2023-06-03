/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let i = 0;
    let j = nums.length -1
    let out = 0;
    while (i<=j){
        if (i===j){
            out+=nums[i]
        } else {
            out += parseInt(nums[i].toString() + nums[j].toString())
        }
        i++
        j--
    }
    return out
};