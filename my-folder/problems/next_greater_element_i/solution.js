/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let out = []
    outer: for (let num of nums1) {
        for (let i = nums2.indexOf(num) + 1; i< nums2.length; i++){
            if (nums2[i] > num) {
                out.push(nums2[i])
                continue outer
            }
        }
        out.push(-1)
    }
    return out
};