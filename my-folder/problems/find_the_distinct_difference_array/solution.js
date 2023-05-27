/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let out = []
    for (let i = 0; i < nums.length; i ++){
        let pref = nums.slice(0,i+1)
        let suff = nums.slice(i+1,nums.length)
        let set = new Set;
        let num1 = 0;
        let num2 = 0;
        for (let num of pref){
            if(!set.has(num)){
                num1 += 1;
                set.add(num)
            }
        }
        let set2 = new Set;
        for (let num of suff){
            if(!set2.has(num)){
                num2 += 1;
                set2.add(num)
            }
        }
        out.push(num1 - num2)
    }
    return out
};