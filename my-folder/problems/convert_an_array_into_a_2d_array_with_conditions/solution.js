/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let out = []
    outer: for (let i = 0; i < nums.length; i++){
        if (i===0) {
            out.push([nums[i]])
            continue outer;
            }
        for (let j = 0; j < out.length; j++){
            if (!out[j].includes(nums[i])){
                out[j].push(nums[i])
                continue outer;
            }
        }
        out.push([nums[i]])
    }
    return out
};