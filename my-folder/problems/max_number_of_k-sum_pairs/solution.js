/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let set = {}
    let count = 0;
    for (let num of nums){
        if (set[k-num]){
            if (set[k-num] > 0){
                set[k-num]--
                count++
            } else {
                if (set[num]) set[num] ++
                else set[num] = 1
            }
        } else {
            if (set[num]) set[num] ++
            else set[num] = 1
        }
    }
    return count
};