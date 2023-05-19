/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) return 0
    let jumps = 0;
    let i = 0;
    while (true) {
        if (i + nums[i] >= nums.length - 1) return jumps + 1
        if (nums[i] === 1) {
            i+=1;
            jumps+=1;
            continue;
        }
        let max_step = nums[i];
        let next_move = nums[i];
        for (let j = 1; j <= nums[i]; j++){
            if (nums[i+j] + j > max_step){
                max_step = nums[i+j] + j
                next_move = j
            }
        }
        i += next_move
        jumps += 1
    }
};