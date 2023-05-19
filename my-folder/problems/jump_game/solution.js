/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let get_to = nums.length-1;
    let step = true
    step: while (step) {
        if (get_to === 0) return true
        for (let i = get_to-1; i >= 0; i--) {
            if (nums[i] >= get_to - i) {
                get_to = i;
                continue step;
            }
        }
        step = false
    }
    return false
};