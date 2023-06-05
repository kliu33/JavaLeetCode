/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let hash_map = {};
    let k = 0;
    let i = 0;
    let subbed = 0;
    while (i < nums.length - subbed) {
        if (hash_map[nums[i]]) hash_map[nums[i]]++
        else hash_map[nums[i]] = 1

        if (hash_map[nums[i]] > 2) {
            console.log(i)
            nums.push(...nums.splice(i,1))
            i--
            subbed++
        } else {
            k++
        }
        i++
    }
    return k
};