/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let out = []
    for (let num of nums) {
        let num_arr = num.toString().split('')
        for (let str_num of num_arr){
            out.push(parseInt(str_num))
        }
    }
    return out
};