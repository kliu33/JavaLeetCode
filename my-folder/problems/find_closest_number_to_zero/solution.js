/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closest_dist = Math.abs(nums[0]);
    let out = nums[0];
    for (let num of nums){
        if (Math.abs(num) <= closest_dist) {
            if (!(Math.abs(num) === closest_dist && num < 0)) {
                out = num
            } 
            closest_dist = Math.abs(num)
        }
    }
    return out
};