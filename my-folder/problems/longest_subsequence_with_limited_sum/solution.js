/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let out = []
    nums.sort((a,b)=> a-b)
    console.log(nums)
    outer: for (let query of queries){
        let sum = 0
        let count = 0;
        for (let i = 0; i <nums.length; i++){
            if (sum + nums[i] <= query) {
                sum += nums[i]
                count++
            } else {
                out.push(count)
                continue outer;
            }
        }
        out.push(nums.length)
    }
    return out
};