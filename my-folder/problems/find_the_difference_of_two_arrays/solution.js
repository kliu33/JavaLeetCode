/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let both = []
    for (let num of nums1){
        if (nums2.includes(num)){
            both.push(num)
        }
    }
    for (let num of nums2){
        if (nums1.includes(num) && !both.includes(num)){
            both.push(num)
        }
    }
    let answer1 = []
    let answer2 = []
    nums1.filter(num => !both.includes(num)).forEach(ele => answer1.includes(ele) ? null : answer1.push(ele))
    nums2.filter(num => !both.includes(num)).forEach(ele => answer2.includes(ele) ? null : answer2.push(ele))

    return [answer1, answer2]
};