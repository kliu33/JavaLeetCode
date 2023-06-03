/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let set = new Set;
    for (let num of nums[0]) {
        set.add(num)
    }
    for (let i = 1; i < nums.length; i++){
        let new_set = new Set;
        for (let num of nums[i]){
            if (set.has(num)) new_set.add(num)
        }
        set = new_set
    }
    return Array.from(set).sort((a,b) => a-b)
};