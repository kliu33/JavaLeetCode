/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let out = []
    let pos = []
    let neg = []
    for (let num of nums){
        if (num < 0) neg.push(num)
        else pos.push(num)
    }
    for (let i = 0; i < pos.length; i++){
        out.push(pos[i])
        out.push(neg[i])
    }
    return out
};