/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dict = {}
    for (let i = 0; i < nums.length; i++) {
      if (dict[nums[i]]) {
        dict[nums[i]] += 1
        if (dict[nums[i]] > nums.length / 2) return nums[i]
      } else {
        dict[nums[i]] = 1
        if (dict[nums[i]] > nums.length / 2) return nums[i]
      }
    }
};