/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let seen = []
    let out = 0;
    for (i = 0; i < nums.length; i++){
      if (seen.includes(nums[i])){
        out -= nums[i]
      } else {
        out += nums[i]
        seen.push(nums[i])
      }
    }
    return out
};